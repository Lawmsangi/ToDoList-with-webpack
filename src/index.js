const addToStorage = require("./modules/addToStorage");
const display = require("./modules/display");
const { removeAllTask } = require("./modules/removeTask");
const updateTask = require("./modules/updateTask");
import displayTime from './modules/date';
import './style.css';


function component() {
    window.addEventListener('DOMContentLoaded', () => {
        displayTime();
    }, false);


    const refreshButton = document.getElementById('refreshBtn');
    refreshButton.addEventListener('click', (e) => {
        e.preventDefault()
        location.reload();
    });

    const add = document.querySelector('#add');
    add.addEventListener('click', (e)=>{
        e.preventDefault();
        const input = document.querySelector('#input');
        addToStorage(input.value);
        display()
        input.value = '';
    })

    const removeAll = document.querySelector('#remove-all');
    removeAll.addEventListener('click', (e) =>{
        e.preventDefault();
        removeAllTask()
        updateTask()
        display()
    })
    display()
}

component()