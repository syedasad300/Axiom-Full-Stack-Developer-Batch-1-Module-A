//Retrieving HTML elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    // Get the parent element of the input field
    const fromControl = input.parentElement;
    fromControl.className = 'form-control error'
    const small = fromControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Event listener
//Create event listener for submit button
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    //check if username input is empty
    if(username.value === ''){
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
});
