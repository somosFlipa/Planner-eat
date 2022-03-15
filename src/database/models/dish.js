const { Sequelize } = require("sequelize");
const db = require("../db");



const dish = db.define(
  "dish",
  {
     cookingrecipeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ingredientId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.FLOAT,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  freezeTableName: true,
  }
);

module.exports = dish;