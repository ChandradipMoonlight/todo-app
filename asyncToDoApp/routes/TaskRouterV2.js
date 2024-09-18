const express = require("express");
const router =  express.Router();


const TaskController = require("../controller/TaskController");

const taskController = new TaskController();




router.post("/create", taskController.createTask);
router.put("/update", taskController.udpateTask);
router.get("/all", taskController.getAllTask);
router.get("/:id", taskController.getTaskDetails);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
