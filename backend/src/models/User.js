const sequelize = require("../config/db");

const User = require("./User");
const Product = require("./Product");

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Product = Product;

module.exports = db;

