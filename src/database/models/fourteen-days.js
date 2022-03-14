const { Sequelize } = require("sequelize");
const db = require("../db/database");
'use strict';

const fourteenDays = db.define(
"fourteen-days",
  {userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
 dayId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
 number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {

    timestamps: false,
  }
);

module.exports = fourteenDays;
