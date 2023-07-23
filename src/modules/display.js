const checkboxChange = require("./checkboxChange");
const editTask = require("./editTask");
const {removeTask }= require("./removeTask");
const { getTask } = require("./store");
const updateTask = require("./updateTask");

const display = () => {
    const lists = document.getElementById('list-to-do');
    lists.innerHTML = ''
    const tasks = getTask()
    tasks.forEach( (item,index) => {
        const listToDo = document.createElement('div');
        const checkbox = document.createElement('input');
        const remove = document.createElement('button');
        const task = document.createElement('span');

        checkbox.type = 'checkbox';
        checkbox.classList.add = 'completed';
        checkbox.className = 'checkbox'
        remove.className = 'remove-btn';
        task.className = 'task';
        listToDo.className = 'to-do'

        task.contentEditable = true;
        task.spellcheck = false;

        task.innerHTML = `${item.description}`;
        remove.innerHTML = '<i class="fa-solid fa-x"></i>';

        if(item.completed === true) {
            checkbox.checked = true;
            task.style.textDecoration = 'line-through';
        }else {
             checkbox.checked = false;
            task.style.textDecoration = 'none';
        }

        checkbox.addEventListener('change', (e)=>{
            checkboxChange(index)
            display()
        })

        task.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                editTask(index, e.currentTarget.innerHTML);
                e.currentTarget.blur()
            }
        })

        remove.addEventListener('click', (e) => {
            removeTask(index+1)
            updateTask()
            display()
        })

        listToDo.appendChild(checkbox)
        listToDo.appendChild(task)
        listToDo.appendChild(remove)
        lists.appendChild(listToDo)
    })

}

module.exports = display