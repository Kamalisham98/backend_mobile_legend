
const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')
const Product = require('./product')(sequelize, DataTypes)
const db = {}

db.Product = Product
db.sequelize = sequelize
// db.Sequelize = Sequelize // need to find out why need here

module.exports = db
