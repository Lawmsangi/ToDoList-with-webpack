const getTask = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

const saveTask = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

module.exports = { getTask, saveTask}