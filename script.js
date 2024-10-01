// Toggle Sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
});

// Open Login/Signup Modal when clicked from the sidebar
const loginSignupBtn = document.getElementById('login-signup-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

loginSignupBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Switch Between Login and Signup
const switchToSignup = document.getElementById('switch-to-signup');
const formTitle = document.getElementById('form-title');
const toggleAuth = document.getElementById('toggle-auth');

switchToSignup.addEventListener('click', () => {
    if (formTitle.innerText === 'Login') {
        formTitle.innerText = 'Sign Up';
        toggleAuth.innerHTML = 'Already a user? <span id="switch-to-signup">Login</span>';
    } else {
        formTitle.innerText = 'Login';
        toggleAuth.innerHTML = 'Not a user? <span id="switch-to-signup">Create an account</span>';
    }
});
``

