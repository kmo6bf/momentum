const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";

// 사용자가 입력한 이름이 없으면 입력창을 출력
// 존재하면 greeting 출력!
// printInputOrGretting();

function onLoginSubmit(e) {
    const username = loginInput.value;

    e.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username)
}

function paintGreeting(username) {
    greeting.innerText = `Hello! ${savedUsername}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername)
}

