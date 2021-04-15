// import functions and grab DOM elements

import { createUser, loginAndRedirect, userExists, usernameAndPasswordMatch } from './local-storage-utils.js';

// initialize state

// set event listeners to update state and DOM
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    const username = formData.get('username');
    const password = formData.get('password');

    if (userExists(username)) {
        if (usernameAndPasswordMatch(username, password)) {
            //loginAndRedirect(username);
        } else {
            alert ('username or pasword are invalid');
        }
    
    } else {
        createUser(username, password);
        loginAndRedirect(username);
    }
    
});
