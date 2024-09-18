

const {Sequelize} = require("sequelize"); // OR
require('dotenv').config();


// import { Sequelize } from "sequelize";

const databaseName = process.env.DB_NAME;
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

console.log("dialect : ",dialect)

const sequelize = new Sequelize(databaseName, userName, password, {
    host : host,
    dialect : dialect
})

// export default sequelize; // OR

module.exports = sequelize;