import { getUser, completeToDo } from './local-storage-utils.js';


export function renderLi(toDo) {
    const li = document.createElement('li');
    li.textContent = toDo.todo;

    if (toDo.completed) {
        li.style.textDecoration = 'line-through';
    }

    li.addEventListener('click', () => {
        completeToDo(toDo.todo);

        renderTodos();
    });

    return li;

}

export function renderTodos() {
    const user = getUser();

    const ul = document.getElementById('toDoList');
    ul.textContent = '';
    user.todos.forEach(todo => {
        const li = renderLi(todo);
        

        ul.append(li);
    });

}




