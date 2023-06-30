const router = require('express').Router();
const CardView = require('../../components/pages/Card');

const { Card, User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { word, translate, topicId } = req.body;
    console.log(req.body);
    const { userId } = req.session;

    const newCard = await Card.create({
      word,
      translate,
      topic_id: Number(topicId),
    });

    const user = await User.findByPk(userId);
    await newCard.addUser(user, { through: { studied: false } });
    
   
    const renderedHTML = res.renderComponent(
      CardView,
      { card: newCard },
      { doctype: false }
    );
    res.json({ success: true, html: renderedHTML });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
