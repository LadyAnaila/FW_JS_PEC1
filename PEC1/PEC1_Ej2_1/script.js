const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const age = document.getElementById('age');

// Función para mostrar mensajes de error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.remove('success');
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Función para mostrar éxito
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
    const small = formControl.querySelector('small');
    small.innerText = '';
}

// Comprobar nombre de usuario
function checkName() {
    if (username.value.trim().length < 4) {
        showError(username, 'El nombre debe tener al menos 4 caracteres');
    } else {
        showSuccess(username);
    }
}


// Comprobar correo electrónico
function checkEmail() {
    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailValue)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }
}

// Comprobar contraseña
// Comprobar contraseña
function checkPassword() {
    const passwordValue = password.value.trim();
    
    if (passwordValue === '') {
        showError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        showError(password, 'Password must be at least 8 characters');
    } else if (!/[A-Z]/.test(passwordValue)) {
        showError(password, 'Password must contain at least one uppercase letter');
    } else if (!/[a-z]/.test(passwordValue)) {
        showError(password, 'Password must contain at least one lowercase letter');
    } else if (!/\d/.test(passwordValue)) {
        showError(password, 'Password must contain at least one number');
    } else if (!/[~!@#\$%\^&*()_+\-=\{\}\|\[\]\\:";'<>?,.\/]/.test(passwordValue)) {
        showError(password, 'Password must contain at least one of the following special characters: ~ ! @ # $ % ^ & * ( ) _ + - = { } | [ ] \\ : " ; \' < > ? , . /');
    } else {
        showSuccess(password);
    }
}

// Comprobar confirmación de contraseña
function checkPasswordMatch() {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if (password2Value === '') {
        showError(password2, 'Please confirm password');
    } else if (passwordValue !== password2Value) {
        showError(password2, 'Passwords do not match');
    } else {
        showSuccess(password2);
    }
}

// Comprobar edad
function checkAge() {
    const ageValue = parseInt(age.value);
    
    if (isNaN(ageValue) || ageValue < 1 || ageValue > 1000) {
        showError(age, 'Please enter a valid age');
    } else {
        showSuccess(age);
    }
}

// Evento de envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    checkName();
    checkEmail();
    checkPassword();
    checkPasswordMatch();
    checkAge();


    // Asegurarse de que las funciones se están llamando
    checkName();
    checkEmail();
    checkPassword();
    checkPasswordMatch();
    checkAge();
});
