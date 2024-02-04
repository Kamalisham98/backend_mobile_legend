const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development'
const dbConfig = require('../config/db-config')[env]
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize
