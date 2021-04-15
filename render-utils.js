import { getUser } from './local-storage-utils.js';

export function renderLi(todo) {
    const li = document.createElement('li');
    li.textContent = todo.todo;
   
    return li;
}

export function renderTodos() {
    const user = getUser();

    const ul = document.getElementById('toDoList');

    user.todos.forEach(todo => {
        const li = renderLi(todo);

        ul.append(li);
    });

}




