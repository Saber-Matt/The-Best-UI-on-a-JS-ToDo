import { getUser } from './local-storage-utils.js';


export function renderLi(toDo) {
    const li = document.createElement('li');
    li.textContent = toDo.todo;

    return li;
}

export function renderTodos() {
    const user = getUser();

    const ul = document.getElementById('toDoList');

    user.todos.forEach(todo => {
        const li = renderLi(todo);
        ul.textContent = '';

        ul.append(li);
    });

}




