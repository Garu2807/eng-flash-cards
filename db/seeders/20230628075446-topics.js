'use strict';
const { Topic, Card, User } = require('../models');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Topic.bulkCreate(
      [
        {
          topic: 'food',
          Cards: [
            {
              word: 'Apple',
              translate: 'Яблоко',
            },
            {
              word: 'Meat',
              translate: 'Мясо',
            },
            {
              word: 'Tomato',
              translate: 'Помидоры',
            },
          ],
        },
      ],
      {
        include: [Card],
      }
    );
    await User.bulkCreate([
      {
        login: 'Gagik',
        password: await bcrypt.hash('123', 10),
      },
    ]);
  },

  down: async () => {
    await User.destroy({ truncate: { cascade: true } });
    await Topic.destroy({ truncate: { cascade: true } });
  },
};
