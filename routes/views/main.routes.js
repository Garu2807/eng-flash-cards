const router = require('express').Router();
const MainPage = require('../../components/pages/MainPage');
const LoginForm = require('../../components/pages/LoginForm');
const RegisterForm = require('../../components/pages/RegisterForm');
const TopicPage = require('../../components/pages/TopicPage');
const UserProfile = require('../../components/pages/UserProfile');
const { Topic, User, Statistic, Card } = require('../../db/models');

router.get('/', (req, res) => {
  res.send(res.renderComponent(MainPage));
});

router.get('/register', (req, res) => {
  res.send(res.renderComponent(RegisterForm));
});

router.get('/login', (req, res) => {
  res.send(res.renderComponent(LoginForm));
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

router.get('/topic', async (req, res) => {
  try {
    const topics = await Topic.findAll();

    res.send(res.renderComponent(TopicPage, { topics }));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.get('/profile', async (req, res) => {
  try {
  
    const { userId } = req.session;
    const cards = await Card.findAll({
        include: {
          model: User,
          as: 'users',
          where: { id: userId },
        },
    });

    const topics = await Topic.findAll();


    res.send(res.renderComponent(UserProfile, { cards, topics }));
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});



module.exports = router;
