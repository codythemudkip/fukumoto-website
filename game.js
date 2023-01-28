const loginForm = document.getElementById("login_form")
const loginButton = document.getElementById("login_btn")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;


})