const router = require('express').Router()
const bcrypt = require('bcrypt');
const { User } = require('../../db/models')

router.post('/register', async(req,res) => {
    const { login, password } = req.body
    try {
        const newUser = await User.create({
            login,
            password: await bcrypt.hash(password, 10),
        })

        req.session.userId= newUser.id;
        res.locals.user = newUser;
        res.json({message:'success'})
    } catch (error) {
        res.status(500).json({message: error.message})   
    }
})

router.post('/login', async (req, res) => {
    const {login, password} = req.body;
    try {
        const user = await User.findOne({
            where: {
                login,
            },
        })

    if(!user) {
        res.status(401).json({message: 'User not found'});
        return
    }

    if (!(await bcrypt.compare(password, user.password)))
    res.status(400).json({ message: 'User logged in'});
    else{
        req.session.user = user.id;
        res.json({message: 'ok'})
    }
    
    } catch (error) {
     res.status(500).json({message: error.message}) 
    }
})

module.exports = router;