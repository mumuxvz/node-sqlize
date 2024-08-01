const { sequelize } = require('../config/database'); // Import the sequelize instance
const { DataTypes } = require('sequelize');

const Book = sequelize.define(
   'Book',
   {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      authorName: {
         type: DataTypes.STRING,
      },
   },
   {
      indexes: [{ unique: true, fields: ['id'] }],
   }
);

module.exports = Book;
