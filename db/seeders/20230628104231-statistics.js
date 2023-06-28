'use strict';
const { Statistic } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    Statistic.bulkCreate([
      {
        card_id: 1,
        user_id: 1,
        studied: true,
      },
      {
        card_id: 2,
        user_id: 1,
        studied: true,
      },
      {
        card_id: 3,
        user_id: 1,
      },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
