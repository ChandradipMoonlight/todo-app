
const TaskRepository = require("../repository/TaskRepository");

const resposneHandler = require("../utils/ResponseHandler");

const taskRepo = new TaskRepository();


class TaskController {

  
    createTask = async (req, res) => {
        try {
            const data = await taskRepo.createTask(req.body);
            resposneHandler.handleResponse(res, data);
        } catch(error) {
            console.error(error);
            resposneHandler.handleError(res, error.message);
        }
    }

    getTaskDetails = async (req, res) => {
        try {
            const data = await taskRepo.getTaskById(req.params.id);
            resposneHandler.handleResponse(res, data);
        } catch(error) {
            console.error(error);
            resposneHandler.handleError(res, error.message);
        }
    }

    getAllTask= async (req, res) => {
        try {
            const data = await taskRepo.fetchAllTAsk();
            resposneHandler.handleResponse(res, data);
        } catch(error) {
            console.error(error);
            resposneHandler.handleError(res, error.message);
        }
    }

    async udpateTask(req, res) {
        try {
            const id = parseInt(req.query.id);
            const data = await taskRepo.updateTask(id, req.body);
            resposneHandler.handleResponse(res, data);
        } catch(error) {
            console.error(error);
            resposneHandler.handleError(res, error.message);
        }
    }

    async deleteTask(req, res) {
        try {
            const id = parseInt(req.params.id);
            const data = await taskRepo.deleteTask(id);
            resposneHandler.handleResponse(res, data);
        } catch(error) {
            console.error(error);
            resposneHandler.handleError(res, error.message);
        }
    }
}

module.exports = TaskController;