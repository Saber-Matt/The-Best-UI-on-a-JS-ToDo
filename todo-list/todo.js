import { addToDo } from '../local-storage-utils.js';

const toDoForm = document.querySelector('form');
toDoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(toDoForm);
    const toDo = formData.get('todo');
    addToDo(toDo);
});