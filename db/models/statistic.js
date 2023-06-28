'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card }) {
      // this.belongsTo(User, { foreignKey: 'user_id' });
      // this.belongsTo(Card, { foreignKey: 'card_id' });
    }
  }
  Statistic.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      card_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Cards',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      studied: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Statistic',
    }
  );
  return Statistic;
};
