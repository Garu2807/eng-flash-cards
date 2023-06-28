'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic, User }) {
      this.belongsTo(Topic, { foreignKey: 'topic_id' });
      this.belongsToMany(User, {
        through: 'Statistics',
        foreignKey: 'card_id',
        as: 'users',
      });
    }
  }
  Card.init(
    {
      topic_id: {
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
