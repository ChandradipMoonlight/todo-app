const {Sequelize, DataTypes, Model} = require("sequelize");

const sequelize = require("../config/DbConfig");

const Task = sequelize.define(
    "tasks",
    {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,  
        },
        title : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        description  : {
            type : DataTypes.TEXT,
            allowNull : true
        }
    }
)

// by extending model

// class Task extends Model {
    
// }

// Task.init(
//     {
//         id : {
//             type : DataTypes.INTEGER,
//             autoIncrement : true,
//             primaryKey : true,  
//         },
//         title : {
//             type : DataTypes.STRING,
//             allowNull : false,
//         },
//         description  : {
//             type : DataTypes.TEXT,
//             allowNull : true
//         }
//     },
//     {
//         sequelize,  // Pass the sequelize instance
//         modelName: "Task", // Singular model name, Sequelize pluralizes it automatically
//         tableName: "tasks", // Explicitly setting the table name if different from model name
//         timestamps: true, // Automatically adds createdAt and updatedAt fields
//     }
// );


module.exports = Task;