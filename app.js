require('@babel/register');
const express = require('express');
const path = require('path');
const ssr = require('./middlewares/ssr');

const mainRouter = require('./routes/views/main.routes');
const registerRouter = require('./routes/views/reglog.routes');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, './public/')));

app.use(ssr);
app.use('/', mainRouter);
app.use('/', registerRouter);

app.listen(PORT, () => console.log(`Server${PORT}`));
