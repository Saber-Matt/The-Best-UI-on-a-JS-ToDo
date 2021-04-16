const USER = 'USER';
const LOGGED_IN = 'LOGGED_IN';

export function createUser(username, password) {
    const user = {
        username,
        password,
        todos: []
    };
    updateUser(user);
}

export function getUser() {
    const stringUser = localStorage.getItem(USER);
    const user = JSON.parse(stringUser);
    return user;
}

export function updateUser(user) {
    const stringUser = JSON.stringify(user);
    localStorage.setItem(USER, stringUser);
}

export function userExists(username) {
    const userInLocalStorage = getUser();

    if (!userInLocalStorage) return false;

    return username === userInLocalStorage.username;
}

export function usernameAndPasswordMatch(username, password) {
    const userInLocalStorage = getUser();

    if (!userExists(username) || userInLocalStorage.password !== password) return false;

    return true;
}

export function login(username) {
    localStorage.setItem(LOGGED_IN, username);
}

export function logout() {
    localStorage.setItem(LOGGED_IN, '');
}

export function loginAndRedirect(username) {
    login(username);

    window.location = '../todo-list/index.html';
}

export function addToDo(todo) {
    const newToDo = {
        todo: todo,
        completed: false,

    };
    const user = getUser();
    user.todos.push(newToDo);

    updateUser(user);
}

export function completeToDo(message) {
    const user = getUser();

    const matchingToDo = user.todos.find((todo) => message === todo.todo);

    matchingToDo.completed = true;

    updateUser(user);
}