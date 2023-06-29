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
        {
          topic: 'animals',
          Cards: [
            {
              word: 'Lyon',
              translate: 'Лев',
            },
            {
              word: 'Dog',
              translate: 'Собака',
            },
            {
              word: 'Cat',
              translate: 'Кошка',
            },
          ],
        },
        {
          topic: 'body',
          Cards: [
            {
              word: 'Arm',
              translate: 'Рука',
            },
            {
              word: 'Face',
              translate: 'Лицо',
            },
            {
              word: 'Head',
              translate: 'Голова',
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
      {
        login: 'Klimovsky',
        password: await bcrypt.hash('123', 10),
      },
    ]);
  },

  down: async () => {
    await User.destroy({ truncate: { cascade: true } });
    await Topic.destroy({ truncate: { cascade: true } });
  },
};
