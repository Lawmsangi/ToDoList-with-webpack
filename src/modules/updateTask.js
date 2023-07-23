const { getTask, saveTask } = require("./store")

const updateTask = () => {
    const tasks = getTask();
    tasks.forEach((task,index) => task.index = index+1)
    saveTask(tasks)
}

module.exports = updateTask