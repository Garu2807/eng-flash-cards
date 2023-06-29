const router = require('express').Router();
const TopicPage = require('../../components/pages/TopicPage');
const { Topic } = require('../../db/models');

router.get('/topic/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const topic = await Topic.findOne({
      where: {
        id: id,
      },
    });
  
    res.send(res.renderComponent(TopicPage, { topic }));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
