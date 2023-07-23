const addToStorage = require('./addToStorage');

describe('Add items to list',()=>{
    const setTasks = jest.spyOn(
        Object.getPrototypeOf(window.localStorage),
        'setItem',
    );
    const getTasks = jest.spyOn(Object.getPrototypeOf(localStorage),'getItem');

    document.innerHTML = <div id="list-to-do"></div>;

    it('adds one item',()=>{
        addToStorage('walk');
         const toDoList = document.getElementById('list-toDo');
        expect(toDoList.childNodes.length).toEqual(1);
        expect(getTasks).toHaveBeenCalled();
        expect(setTasks).toHaveBeenCalled();
    })
})