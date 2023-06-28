const router = require('express').Router();
const RegisterForm = require('../../components/pages/RegisterForm');
const LoginForm = require('../../components/pages/LoginForm')


router.get('/register', (req,res)=>{
    res.send(res.renderComponent(RegisterForm))
})

router.get('/login', (req,res) =>{
    res.send(res.renderComponent(LoginForm))
})

module.exports = router