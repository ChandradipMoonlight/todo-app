const Task = require("../models/Task");

class InMemoryTaskRepository {
    constructor() {
        this.taskMap = new Map();
        this.id = 1;
    }

    createTask(title, description) {
        const id = this.id++;
        this.taskMap.set(id, new Task(id, title, description));
        console.log(this.taskMap.size);
        return id;
    }

    updateTask(id, updatedFields) {
        const existingTask = this.getTaskById(id);
        if(this.isFieldPresent(updatedFields.title)) {
            existingTask.title = updatedFields.title;
        }
        if(this.isFieldPresent(updatedFields.description)) {
            existingTask.description = updatedFields.description;
        }
        this.taskMap.set(id, existingTask);
    }

    getTaskById(id) {
        if(!this.taskMap.has(+id)) {
            throw new Error(`Task with ID ${id} not found!`)
        }
        return this.taskMap.get(+id);
    }

    getAllTasks() {
        const res = [...this.taskMap.values()];
        return res;
    }

    deleteTaskById(id) {
        const taskid = Number(id);
        if(!this.taskMap.has(taskid)) {
            throw new Error(`Task with ID ${id} not found!`)
        }
        return this.taskMap.delete(taskid);
    }

    isFieldPresent(field) {
        return (field !==null && field !== undefined);
    }
}

module.exports = InMemoryTaskRepository;