require('@babel/register');
const express = require('express');
const path = require('path');
const ssr = require('./middlewares/ssr')
const mainrouter = require('./routes/views/main.routes');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, './public/')));

app.use(ssr);
app.use('/', mainrouter);

app.listen(PORT, () => console.log(`Server${PORT}`));
