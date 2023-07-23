const { getTask, saveTask } = require("./store")

const editTask = (index, edit) => {
    const tasks = getTask()
    tasks[index].description = edit;
    saveTask(tasks)
}

module.exports = editTask