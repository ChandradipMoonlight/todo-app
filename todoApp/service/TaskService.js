
const InMemoryTaskRepository = require("../repository/InMemoryTaskRepository");

class TaskService {
    taskRepo;
    constructor() {
        this.taskRepo = new InMemoryTaskRepository();
    }
    
    createTask(taskRequest) {
        const {title, description} = taskRequest;
        return this.taskRepo.createTask(title, description);
    }

    fetchAllTask() {
        const res = this.taskRepo.getAllTasks();
        return res;
    }

    getTaskDetails(id) {
        return this.taskRepo.getTaskById(id);
    }

    deleteTask(id) {
        return this.taskRepo.deleteTaskById(id);
    }
} 

module.exports = TaskService;

// export default TaskService;