const database = require('../database/connection')

class TaskController {
    newTask(req,res){
        const {task, descriptionTask, responsible } = req.body

        console.log(task, descriptionTask, responsible);

        database.insert({task, descriptionTask, responsible})
            .table("tasks")
            .then((data) => {
                console.log(data);
                res.json({message: "Tarefa criada com sucesso!"})
        })
            .catch((error )=> {
                console.log(error);
        })
    }

    listTasks(req,res){
        database.select("*")
            .table("tasks")
            .then((tasks) => {
                console.log(tasks);
                res.json(tasks)
        }) 
            .catch((error)=> {
                console.log(error);
        })
    }

    
    listATask(req,res) {
        const id = req.params

        database.select("*")
            .table("tasks")
            .where(id,'==', id)
            .then(task => {
                console.log(task);
                res.json(task)
        })
            .catch(error => {
                console.log(error);
        })
    }

    updateTask(req, res) {
        const id = req.params
        const{descriptionTask} = req.body

        database.where(id,'==',id)
            .update({descriptionTask:descriptionTask})
            .table("tasks")
            .then(data => {
                res.json({message: "Tarefa atualizada com sucesso !"})
            })
            .catch(error => {
                console.log(error);
            })
    }

    deleteTask(req,res) {
        const id = req.params

        database.where(id,'==',id)
        .del()
        .table("tasks")
        .then((data) => {
            res.json({message: "Tarefa removida com sucesso"})
        })
        .catch((error) => {
            res.json(error)
        })
    }



}

module.exports = new TaskController()