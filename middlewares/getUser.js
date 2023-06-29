const { User } = require('../db/models');

// async function getUser(req, res, next) {

//   const { userId } = req.session;

//   res.locals.user = userId && (await User.findOne({ where: { id: userId } }));
//   next();
// }

async function getUser(req, res, next) {
  if (req.session?.userId) {
    const user = await User.findByPk(req.session.userId);
    res.locals.user = user;
  }
  next();
}

module.exports = getUser;
