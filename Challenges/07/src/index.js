const loginform = document.querySelector("#login-form");
const numberrange = document.querySelector("#numberrange");
const numberset = document.querySelector("#numberset");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
// form submit event handler
function onSubmitNumberButton(event){
  // 기본 동작을 막음
  event.preventDefault();
  // 입력받은 최대숫자, 숫자설정값 변수에 저장
  const numran = parseInt(numberrange.value);
  const numset = parseInt(numberset.value);
  // 0 ~ n까지의 랜덤 숫자 출력
  const random = Math.floor(Math.random() * (numran + 1));
  // display:none 해제 및 텍스트 설정
  text1.innerText = `You choise : ${numset}, the machine choise : ${random}.`;
  text1.classList.remove("hidden");
  text2.classList.remove("hidden");
  // 숫자 판별 분기문
  if (numset === random){
    text2.innerText = "You Win!!";
    text2.classList.add("fontweightbold");
  }
  else{
    text2.innerText = "You Lose!!";
    text2.classList.remove("fontweightbold");
  }
}
// form submit Event
loginform.addEventListener("submit", onSubmitNumberButton);