import { addToDo } from '../local-storage-utils.js';
import { renderTodos, renderLi } from '../render-utils.js';

const toDoForm = document.querySelector('form');
toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(toDoForm);
    const toDo = formData.get('todo');
    addToDo(toDo);

    renderLi(toDo);
    renderTodos();

    toDoForm.reset();

});

renderTodos();