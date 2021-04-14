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