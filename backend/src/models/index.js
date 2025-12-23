const sequelize = require("../config/db");
const User = require("./User");
const Product = require("./Product");

sequelize.sync({ alter: true });


module.exports = { User, Product };
