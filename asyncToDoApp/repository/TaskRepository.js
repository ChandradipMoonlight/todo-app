const Task = require("../models/Task");

class TaskRepository {

    async createTask(task) {
        return Task.create(task);
    }

    getTaskById = async id => {
        const taskFromDb = await Task.findByPk(id);
        if(!taskFromDb) {
            throw new Error(`Task details not found with given Id : ${id}`)
        }
        return taskFromDb;
    }

    updateTask = async (id, updateRequest) => {
        const taskFronDb = await this.getTaskById(id);

        if(this.isPresent(updateRequest.title)) {
            taskFronDb.title = updateRequest.title;
        }
        if(this.isPresent(updateRequest.description)) {
            taskFronDb.description = updateRequest.description;
        }

       return await taskFronDb.save();
    }

    isPresent = field => field !== null && field !== undefined;

    fetchAllTAsk = async () => {
        return Task.findAll();
    }
    
    deleteTask = async id => {
        const taskFromDb = await this.getTaskById(id);
        await taskFromDb.destroy(); // return Promise<Void>
        // await Task.destroy({where :  {id}}) // return number of rows deleted [Promise<Number>]
        return id;
    }
}

module.exports = TaskRepository;