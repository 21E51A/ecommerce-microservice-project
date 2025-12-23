const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,

  // 👇 REQUIRED FOR ADMIN
  role: {
    type: DataTypes.STRING,
    defaultValue: "user" // user | admin
  }
});

module.exports = User;
