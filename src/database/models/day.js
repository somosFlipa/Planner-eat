const { Sequelize } = require("sequelize");
const db = require("../db/database");
'use strict';

const day = db.define(
  "day",
  {
    breakfast: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    lunch: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tea: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dinner: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = day;