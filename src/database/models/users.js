const { Sequelize } = require("sequelize");
const db = require("../db/database");
'use strict';

const user = db.define(
  "user",
  {
  
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = user;
