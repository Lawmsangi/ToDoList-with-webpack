const { getTask, saveTask } = require("./store");

const removeTask = (index) => {
    const tasks = getTask();
    const filteredTasks = tasks.filter(task => task.index !== index)
    saveTask(filteredTasks);
}

const removeAllTask = () => {
    const tasks = getTask();
    const filteredTasks = tasks.filter(task => task.completed === false)
    saveTask(filteredTasks);
}

module.exports = {removeTask, removeAllTask};