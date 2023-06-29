require('@babel/register');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');

const ssr = require('./middlewares/ssr');
const getUser = require('./middlewares/getUser');

const configSession = require('./config/configSession');

const mainRouter = require('./routes/views/main.routes');
const registerRouter = require('./routes/views/reglog.routes');
const authRouter = require('./routes/api/auth.routes')
const topicRouter = require('./routes/views/topic.routes')
const themesRouter = require('./routes/api/themes.routes')
const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(session(configSession));

app.use(express.static(path.join(__dirname, './public/')));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(getUser);
app.use(ssr);
app.use('/', mainRouter);
app.use('/', registerRouter);
app.use('/api/auth', authRouter);
app.use('/',topicRouter);
app.use('/', themesRouter)



app.listen(PORT, () => console.log(`Server${PORT}`));
