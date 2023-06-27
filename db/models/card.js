'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic, Statistic }) {
      this.belongsTo(Topic, { foreignKey: 'topics_id' });
      this.hasMany(Statistic, { foreignKey: 'cards_id' });
      // this.belongsToMany(User, {
      //   through: 'Statistics',
      //   foreignKey: 'cards_id',
      //   as: 'users',
      // });
    }
  }
  Card.init(
    {
      topics_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'topics',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      word: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      translate: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
