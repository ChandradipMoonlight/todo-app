
const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");

const taskController = new TaskController();

router.post("/create", taskController.createTask);
router.get("/all", taskController.fetchAllTask);
router.get("/:id", taskController.getTaskDetails);
router.delete("/delete", taskController.deleteTask);

module.exports =router;