// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    const username = formData.get('username');
    const password = formData.get('password');
    
});