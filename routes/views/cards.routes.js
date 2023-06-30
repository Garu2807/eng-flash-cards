const router = require('express').Router();
const CardsPage = require('../../components/pages/CardsPage');
const { Card, Topic, Statistic, User } = require('../../db/models');

router.get('/:id/cards', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id: req.session.userId } });
    const topic = await Topic.findOne({
      where: {
        id: id,
      },
      include: {
        model: Card,
        include: {
          model: User,
          required: false,
          as: 'users',
          through: {
            attributes: {
              include: ['studied'],
            },
          },
        },
      },
    });

    await user.addCards(topic.Cards, { through: { studied: false } });

    const topicNew = await Topic.findOne({
      where: {
        id: id,
      },
      include: {
        model: Card,
        include: {
          model: User,
          required: false,
          as: 'users',
          through: {
            where: {
              user_id: req.session.userId,
            },
            attributes: {
              include: ['studied'],
            },
          },
        },
      },
    });

    console.log(topicNew);

    res.send(res.renderComponent(CardsPage, { topic, cards: topicNew.Cards }));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});
router.put('/cards/upd', async (req, res) => {
  try {
    const { cardId } = req.body;
    console.log(cardId, req.body);
    const userStat = await Statistic.findOne({
      where: {
        user_id: req.session.userId,
        card_id: cardId,
      },
    });
    userStat.studied = true;
    userStat.save();
    res.json({ message: 'ok' });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
