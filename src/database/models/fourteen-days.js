const { Sequelize } = require("sequelize");
const db = require("../db");


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
  freezeTableName: true,
  }
);

module.exports = fourteenDays;
