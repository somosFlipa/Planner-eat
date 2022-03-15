const { Sequelize } = require("sequelize");
const db = require("../db");
const cookingRecipe = require("./cooking-recipe");
const dish = require("./dish");

const ingredients = db.define(
  "ingredients",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    measure: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  freezeTableName: true,
  }
);


module.exports = ingredients;