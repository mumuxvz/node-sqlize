const express = require("express");
const { sequelize } = require("./config/database"); // Correctly import the sequelize instance
const BookModel = require("./models/Book");
const app = express();
const port = 3000;

const initApp = async () => {
    console.log("Testing the database connection..");

    try {
        await sequelize.authenticate(); // Use the correct sequelize instance
        console.log("Connection has been established successfully.");

        // Uncomment and configure as needed
        await BookModel.sync({ alter: true }); // Wait for the sync operation to complete
        app.use("/book", require("./Router/Router"));
        app.listen(port, () => {
            console.log(`Server is running at: http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

initApp();
