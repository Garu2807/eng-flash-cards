const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(),
  /* указываем, как будет называться кука */
  name: 'user_sid',
  secret: '2VEjN2s0',

  resave: false,

  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, 
    httpOnly: true,
  },
};

module.exports = sessionConfig;