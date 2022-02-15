const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function handleLoginBtnClick() {
  const username = logininput.value;
  console.log(username);
}

function onLoginSubmit(event) {
  event.preventDefault();    // 기본 동작을 막음
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

function handleLinkClick(){
  alert("Click!");
}

link.addEventListener("click", handleLinkClick);