const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('book', 'root', 'Admin@123', {
   host: 'localhost',
   dialect: 'mysql', // or 'postgres', 'sqlite', etc.
});

module.exports = { sequelize };
