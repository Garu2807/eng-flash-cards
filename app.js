require('@babel/register');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');

const ssr = require('./middlewares/ssr');
const getUser = require('./middlewares/getUser');

const configSession = require('./config/configSession');

const mainRouter = require('./routes/views/main.routes');
const authRouter = require('./routes/api/auth.routes')
const cardRouter = require('./routes/views/cards.routes')

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(session(configSession));

app.use(express.static(path.join(__dirname, './public/')));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(ssr);
app.use(getUser);
app.use('/', mainRouter);
app.use('/api/auth', authRouter);
app.use('/topic', cardRouter)




app.listen(PORT, () => console.log(`Server${PORT}`));
