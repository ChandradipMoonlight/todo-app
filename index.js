//npm init -y command to create package.json

// npm install express -> it download all espress related library basically create package-lock.json with all dependencies for express

// node index.js // to run the server

const express = require("express");
const bodyParser = require('body-parser');
const taskrouter = require("./todoApp/routes/TaskRouter");
const taskRouterV2 = require("./asyncToDoApp/routes/TaskRouterV2")
const sequelize = require("./asyncToDoApp/config/DbConfig");


const port = 3000;

const app = express();

// midleware to handle rqeuest body
app.use(bodyParser.json());


// middleware to handle the task realated routes
app.use("/tasks", taskrouter);
app.use("/tasks/v2", taskRouterV2);


app.listen(port, () => {
    console.log(`Http server is started on port ${port}`);
    checkDBConnection();
});


async function checkDBConnection() {
    try {
        await sequelize.authenticate().then(() => console.log("MySQL Database Connection has been established successfully!"));
        await sequelize.sync({ alter: true }).then(handler => {
            console.log("Model Sync started");
        })
        console.log("Models Synched successfully!");

    } catch(error) {
        console.log("Not able to connect")
        console.error(error);
    }
}


