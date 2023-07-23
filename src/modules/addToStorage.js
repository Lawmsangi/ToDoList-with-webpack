const { getTask, saveTask } = require("./store.js")

const addToStorage = (description) => {
    const tasks = getTask()
    const newTask = {
        description : description,
        completed : false,
        index : tasks.length+1
    }
    tasks.push(newTask)
    saveTask(tasks)
}

module.exports = addToStorage