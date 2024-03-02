

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});

// function signIn(email,password) {
//     if (email.value == 'danmcfc123@outlook.com'){
//         if (password.value == 'Test123!'){
//             alert('here password = ' + password.value)
//             document.getElementById('sign-in-btn').href += "index.html"
//         }
//     }
// }

const loginForm = document.getElementById("sign-in-form");
const loginButton = document.getElementById("sign-in-btn");
const loginErrorMsg = document.getElementById("sign-in-error-msg");
const containerLogin = document.getElementById('container');
let loginAttempts = 0

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "danmcfc123@outlook.com" && password === "test!") {
        if (loginAttempts >= 3){
            document.getElementById('in-email').value = ''
            document.getElementById('in-password').value = ''
            return
        }
        containerLogin.style.display = 'none'
        document.getElementById('profile-container').style.display = 'flex'
        loggedIn = 'Y'

        return loggedIn;
        // window.location.href = 'index.html'

    } else {
        loginAttempts += 1

        if (loginAttempts >= 3) {
            loginErrorMsg.textContent = 'Too many failed attempts. Please try again later.'
        }

        loginErrorMsg.style.opacity = 1;
        document.getElementById('in-email').value = ''
        document.getElementById('in-password').value = ''
    }
})

function accDetails() {
    document.getElementById('acc-details').style.display = 'flex'
    document.getElementById('subscription').style.display = 'none'
    document.getElementById('pay-details').style.display = 'none'
    document.getElementById('log-out').style.display = 'none'
    document.getElementById('privacy').style.display = 'none'
}

function privacy() {
    document.getElementById('acc-details').style.display = 'none'
    document.getElementById('subscription').style.display = 'none'
    document.getElementById('pay-details').style.display = 'none'
    document.getElementById('log-out').style.display = 'none'
    document.getElementById('privacy').style.display = 'flex'
}

function subscription() {
    document.getElementById('acc-details').style.display = 'none'
    document.getElementById('subscription').style.display = 'flex'
    document.getElementById('pay-details').style.display = 'none'
    document.getElementById('log-out').style.display = 'none'
    document.getElementById('privacy').style.display = 'none'
}
function payDetails() {
    document.getElementById('acc-details').style.display = 'none'
    document.getElementById('subscription').style.display = 'none'
    document.getElementById('pay-details').style.display = 'flex'
    document.getElementById('log-out').style.display = 'none'
    document.getElementById('privacy').style.display = 'none'
}

function logOut() {
    document.getElementById('acc-details').style.display = 'none'
    document.getElementById('subscription').style.display = 'none'
    document.getElementById('pay-details').style.display = 'none'
    document.getElementById('log-out').style.display = 'flex'
    document.getElementById('privacy').style.display = 'none'
}

function loadLogged(loggedIn) {
    alert('logged in = ' + loggedIn)
    if (loggedIn === 'Y'){
        containerLogin.style.display = 'none'
        document.getElementById('profile-container').style.display = 'flex'
    }
}
