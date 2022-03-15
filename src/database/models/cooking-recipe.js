const { Sequelize } = require("sequelize");
const db = require("../db");
const ingredients = require('./ingredients')
const dish = require('./dish')
'use strict';

const cookingRecipe = db.define(
  "cooking-recipe",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subcategory: {
      type: Sequelize.STRING,
      allowNull: false,
    },origin: {
      type: Sequelize.STRING,
      allowNull: false,
    },difficultyLevel: {
      type: Sequelize.STRING,
      allowNull: false,
    },prepatationTime: {
      type: Sequelize.STRING,
      allowNull: false,
    },cookingTime: {
      type: Sequelize.STRING,
      allowNull: false,
    },stepOne: {
      type: Sequelize.STRING,
      allowNull: false,
    },stepTwo: {
      type: Sequelize.STRING,
      allowNull: true,
    },stepThree: {
      type: Sequelize.STRING,
      allowNull: true,
    },stepFour: {
      type: Sequelize.STRING,
      allowNull: true,
    },stepFive: {
      type: Sequelize.STRING,
      allowNull: true,
    },accompaniedMeals	: {
      type: Sequelize.STRING,
      allowNull: true,
    },tips: {
      type: Sequelize.STRING,
      allowNull: true,
    },drinks: {
      type: Sequelize.STRING,
      allowNull: true,
    },creator: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  },
  {
    timestamps: false,
  freezeTableName: true,
  }
);

// cookingRecipe.hasMany(ingredients);


module.exports = cookingRecipe;