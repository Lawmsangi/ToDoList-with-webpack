/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_js"] = self["webpackChunkto_do_list_js"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const addToStorage = __webpack_require__(/*! ./modules/addToStorage */ \"./src/modules/addToStorage.js\");\r\nconst display = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\r\nconst { removeAllTask } = __webpack_require__(/*! ./modules/removeTask */ \"./src/modules/removeTask.js\");\r\nconst updateTask = __webpack_require__(/*! ./modules/updateTask */ \"./src/modules/updateTask.js\");\r\n\r\nfunction component() {\r\n    const add = document.querySelector('#add');\r\n    add.addEventListener('click', (e)=>{\r\n        e.preventDefault();\r\n        const input = document.querySelector('#input');\r\n        addToStorage(input.value);\r\n        display()\r\n        input.value = '';\r\n    })\r\n\r\n    const removeAll = document.querySelector('#remove-all');\r\n    removeAll.addEventListener('click', (e) =>{\r\n        e.preventDefault();\r\n        removeAllTask()\r\n        updateTask()\r\n        display()\r\n    })\r\n    display()\r\n}\r\n\r\ncomponent()\n\n//# sourceURL=webpack://to-do-list-js/./src/index.js?");

/***/ }),

/***/ "./src/modules/addToStorage.js":
/*!*************************************!*\
  !*** ./src/modules/addToStorage.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getTask, saveTask } = __webpack_require__(/*! ./store.js */ \"./src/modules/store.js\")\r\n\r\nconst addToStorage = (description) => {\r\n    const tasks = getTask()\r\n    const newTask = {\r\n        description : description,\r\n        completed : false,\r\n        index : tasks.length+1\r\n    }\r\n    tasks.push(newTask)\r\n    saveTask(tasks)\r\n}\r\n\r\nmodule.exports = addToStorage\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/addToStorage.js?");

/***/ }),

/***/ "./src/modules/checkboxChange.js":
/*!***************************************!*\
  !*** ./src/modules/checkboxChange.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getTask, saveTask } = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\r\n\r\nconst checkboxChange = (index) =>{\r\n    const tasks = getTask();\r\n    if(tasks[index].completed === true){\r\n        tasks[index].completed = false;\r\n    }else if (tasks[index].completed === false){\r\n        tasks[index].completed = true;\r\n    }\r\n    saveTask(tasks)\r\n}\r\n\r\nmodule.exports = checkboxChange\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/checkboxChange.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const checkboxChange = __webpack_require__(/*! ./checkboxChange */ \"./src/modules/checkboxChange.js\");\r\nconst editTask = __webpack_require__(/*! ./editTask */ \"./src/modules/editTask.js\");\r\nconst removeTask = __webpack_require__(/*! ./removeTask */ \"./src/modules/removeTask.js\");\r\nconst { getTask } = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\r\nconst updateTask = __webpack_require__(/*! ./updateTask */ \"./src/modules/updateTask.js\");\r\n\r\nconst display = () => {\r\n    const lists = document.getElementById('list-to-do');\r\n    lists.innerHTML = ''\r\n    const tasks = getTask()\r\n    tasks.forEach( (item,index) => {\r\n        const listToDo = document.createElement('div');\r\n        const checkbox = document.createElement('input');\r\n        const remove = document.createElement('button');\r\n        const task = document.createElement('span');\r\n\r\n        checkbox.type = 'checkbox';\r\n        checkbox.classList.add = 'completed';\r\n        remove.className = 'remove-btn';\r\n        task.className = 'task';\r\n\r\n        task.contentEditable = true;\r\n        task.spellcheck = false;\r\n\r\n        task.innerHTML = `${item.description}`;\r\n        remove.innerHTML = 'Remove';\r\n\r\n        if(item.completed === true) {\r\n            checkbox.checked = true;\r\n            task.style.textDecoration = 'line-through';\r\n        }else {\r\n             checkbox.checked = false;\r\n            task.style.textDecoration = 'none';\r\n        }\r\n\r\n        checkbox.addEventListener('change', (e)=>{\r\n            checkboxChange(index)\r\n            display()\r\n        })\r\n\r\n        task.addEventListener('keypress', (e) => {\r\n            if (e.key === 'Enter') {\r\n                e.preventDefault();\r\n                editTask(index, e.currentTarget.innerHTML);\r\n                e.currentTarget.blur()\r\n            }\r\n        })\r\n\r\n        remove.addEventListener('click', (e) => {\r\n            removeTask(index+1)\r\n            updateTask()\r\n            display()\r\n        })\r\n\r\n        listToDo.appendChild(checkbox)\r\n        listToDo.appendChild(task)\r\n        listToDo.appendChild(remove)\r\n        lists.appendChild(listToDo)\r\n    })\r\n\r\n}\r\n\r\nmodule.exports = display\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getTask, saveTask } = __webpack_require__(/*! ./store */ \"./src/modules/store.js\")\r\n\r\nconst editTask = (index, edit) => {\r\n    const tasks = getTask()\r\n    tasks[index].description = edit;\r\n    saveTask(tasks)\r\n}\r\n\r\nmodule.exports = editTask\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/editTask.js?");

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getTask, saveTask } = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\r\n\r\nconst removeTask = (index) => {\r\n    const tasks = getTask();\r\n    const filteredTasks = tasks.filter(task => task.index !== index)\r\n    saveTask(filteredTasks);\r\n}\r\n\r\nconst removeAllTask = () => {\r\n    const tasks = getTask();\r\n    const filteredTasks = tasks.filter(task => task.completed === false)\r\n    saveTask(filteredTasks);\r\n}\r\n\r\nmodule.exports = {removeTask, removeAllTask};\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/removeTask.js?");

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((module) => {

eval("const getTask = () => {\r\n    return JSON.parse(localStorage.getItem('tasks')) || [];\r\n}\r\n\r\nconst saveTask = (tasks) => {\r\n    localStorage.setItem('tasks', JSON.stringify(tasks));\r\n}\r\n\r\nmodule.exports = { getTask, saveTask}\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/store.js?");

/***/ }),

/***/ "./src/modules/updateTask.js":
/*!***********************************!*\
  !*** ./src/modules/updateTask.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getTask, saveTask } = __webpack_require__(/*! ./store */ \"./src/modules/store.js\")\r\n\r\nconst updateTask = () => {\r\n    const tasks = getTask();\r\n    tasks.forEach((task,index) => task.index = index+1)\r\n    saveTask(tasks)\r\n}\r\n\r\nmodule.exports = updateTask\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/updateTask.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);