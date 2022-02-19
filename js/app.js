const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const USERNAME_KEY = "username";
function handleLoginBtnClick(event) {

  const username = logininput.value;
  console.log(username);
}

function onLoginSubmit(event) {
  event.preventDefault();    // 기본 동작을 막음
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add("hidden");
  paintGrretings(username);
}

function paintGrretings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);
if (savedUsername === null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGrretings(savedUsername);
}