const express = require("express");

const app = express();


const port = 3000;


const BookModel = require("./models/Book");
const {db} = require("./config/database");

const initApp = async () => {
    console.log("Testing the database connection..");
 
    try {
       await db.sequelize.authenticate(); // Ensure you are calling authenticate on the sequelize instance
       console.log("Connection has been established successfully.");
 
       await BookModel.sync({ alter: true }); // Wait for the sync operation to complete
 
       app.listen(port, () => {
          console.log(`Server is running at: http://localhost:${port}`);
       });
    } catch (error) {
       console.error("Unable to connect to the database:", error);
    }
 };
 

initApp();
