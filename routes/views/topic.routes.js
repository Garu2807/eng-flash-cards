const router = require('express').Router();
const TopicPage = require('../../components/pages/TopicPage');

router.get('/topic', (req, res) => {
  res.send(res.renderComponent(TopicPage));
});

module.exports = router;
