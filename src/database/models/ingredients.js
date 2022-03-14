const { Sequelize } = require("sequelize");
const db = require("../db/database");
'use strict';

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
  }
);

module.exports = ingredients;