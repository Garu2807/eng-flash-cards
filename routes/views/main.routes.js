const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');

router.get('/', (req, res) => {
  res.send(res.renderComponent(MainPage));
});
