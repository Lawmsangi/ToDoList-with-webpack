const { getTask, saveTask } = require("./store");

const checkboxChange = (index) =>{
    const tasks = getTask();
    if(tasks[index].completed === true){
        tasks[index].completed = false;
    }else if (tasks[index].completed === false){
        tasks[index].completed = true;
    }
    saveTask(tasks)
}

module.exports = checkboxChange