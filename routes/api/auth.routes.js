const router = require('express').Router()
const bcrypt = require('bcrypt');
const { User } = require('../../db/models')

router.post('/register', async(req,res) => {
    const { login, password } = req.body
    
  try {
    if (login && password) {
      /* Ищёт пользователя с таким логином в базе */
      let newUser = await User.findOne({ where: { login } });
      /* Если не нашёл — регистрирует */
      if (!newUser) {
        newUser = await User.create({
          login,
          /* хэшируем пароль */
          password: await bcrypt.hash(password, 10),
        });

        // авторизация - запоминаем пользователя
        // req.session - хранилище сессии, которое уникально для каждого браузера
        req.session.userId = newUser.id;
        res.locals.user = newUser;

        res.status(201).json({ message: 'success' });
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
    const {login, password} = req.body;
    try {
        const user = await User.findOne({
            where: {
                login,
            },
        })

        if(!user) {
            res.status(401).json({message: 'Пользователь не найден, пройди регистрацию или правильность ввода данных'});
            return
        }

        if (!(await bcrypt.compare(password, user.password))) {
            res.status(400).json({ message: 'Такой пользователь уже зарегистрирован, нажми войти'});
        }
        else {
            req.session.userId = user.id;
     
            res.locals.user = user;
            res.json({message: 'ok'})
        }
    
    } catch (error) {
     res.status(500).json({message: error.message}) 
    }
})

module.exports = router;