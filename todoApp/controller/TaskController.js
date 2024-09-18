
// import TaskService from "../service/TaskService"; // Or

const TaskService = require("../service/TaskService");

class TaskController {
    taskService;
    constructor() {
        this.taskService = new TaskService();
    }

    createTask = (req, res) => {
        try {
            const taskRequest = req.body;
            const taskId = this.taskService.createTask(taskRequest)
            this.onSuccess(res, taskId);
        } catch (error) {
            console.log(error);
            this.onError(res, error.message);
        }
    }

    fetchAllTask = (req, res) => {
        try {
            const data = this.taskService.fetchAllTask();
            this.onSuccess(res, data);
        } catch (error) {
            console.log(error)
            this.onError(res, error.message);
        }
    }

    getTaskDetails = (req, res) => {
        try {
            const id = req.params.id;
            const data = this.taskService.getTaskDetails(id);
            this.onSuccess(res, data);
        } catch (error) {
            console.error(error);
            this.onError(res, error.message);
        }
    }

    deleteTask = (req, res) => {
        try {
            const id = req.query.id;
            const data = this.taskService.deleteTask(id);
            this.onSuccess(res, data);
        } catch(error) {
            console.error(error);
            this.onError(res, error.message);
        }
    }

    onSuccess(res, body) {
        res.status(200).json({
            status: true,
            data: body,
        });
    }

    // Helper method to send an error response
    onError(res, errorMsg) {
        res.status(409).json({
            status: false,
            error: errorMsg,
        });
    }


}

module.exports = TaskController;