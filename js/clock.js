const clock = document.querySelector("h2#clock");

clock.innerText = "haha";

function getClock() {
  const date = new Date();
  const hours= date.getHours().toString().padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minute}:${second}`;
}
getClock();
setInterval(getClock, 1000);

// setInterval(arg1:function. arg2:몇mx) 인터벌 발생 메서드
//setInterval(sayHello, 3000);

// setTimeout(arg1: function, arg2:몇ms) 몇초 뒤 함수 실행
//setTimeout(sayHello, 5000);

// .padStart(2, "0"). => 2글자가 안될 시, 앞에 0을 추가