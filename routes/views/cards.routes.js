const router = require('express').Router();
const CardsPage = require('../../components/pages/CardsPage');
const { Card, Topic } = require('../../db/models');


router.get('/:id/cards', async (req, res) => {
  try {
    const { id } = req.params;
    const topic = await Topic.findOne({
      where: {
        id: id,
      },
      include:{
        model: Card
      }
    });


    res.send(res.renderComponent(CardsPage, { topic, cards: topic.Cards }));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
