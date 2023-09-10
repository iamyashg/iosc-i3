const loadingScreen = document.getElementById('loadingScreen');

// Display loading screen for a duration of 5 seconds on page load
function showLoading(duration) {
    loadingScreen.style.display = 'flex';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, duration);
}

window.addEventListener('load', () => {
    showLoading(5000);
});

const darkModeToggle = document.querySelector('#darkModeToggle');
const body = document.body;
const toggleBall = document.querySelector('#toggleBall');

const styleMeButton = document.getElementById('styleMeButton');

// Toggle 'disco-effect' class on button click
styleMeButton.addEventListener('click', () => {
    styleMeButton.classList.toggle('disco-effect');
});

darkModeToggle.addEventListener('change', () => {
    showLoading(3000);
    // Toggle dark mode styles
    if (darkModeToggle.checked) {
        body.classList.add('dark');
        toggleBall.style.transform = 'translateX(100%)';
    } else {
        body.classList.remove('dark');
        toggleBall.style.transform = 'translateX(0)';
    }
});

const loginFormFields = document.getElementById('loginFormFields');
const registerFormFields = document.getElementById('registerFormFields');
const loginSubmitButton = document.getElementById('loginSubmitButton');
const registerSubmitButton = document.getElementById('registerSubmitButton');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');

// Switch between login and signup forms
function switchForm(formType) {
    if (formType === 'login') {
        loginFormFields.style.display = 'block';
        registerFormFields.style.display = 'none';
    } else if (formType === 'signup') {
        loginFormFields.style.display = 'none';
        registerFormFields.style.display = 'block';
    }
}

switchForm('login');

loginButton.addEventListener('click', () => {
    switchForm('login');
    loginButton.classList.add('active');
    registerButton.classList.remove('active');
});

registerButton.addEventListener('click', () => {
    switchForm('signup');
    registerButton.classList.add('active');
    loginButton.classList.remove('active');
});

loginSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Retrieve and alert login credentials
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    alert(`Logging in with username/email: ${loginEmail} and password: ${loginPassword}`);
});

registerSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Retrieve and alert registration details
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const registerEmail = document.getElementById('registerEmail').value;
    const registerPassword = document.getElementById('registerPassword').value;
    alert(`Signing up with full name: ${fullName}, username: ${username}, email: ${registerEmail}, and password: ${registerPassword}`);
});
