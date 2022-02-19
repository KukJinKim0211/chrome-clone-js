const quotes = [
  {quote:"눈물이 차올라서 고갤들어", author:"아이유", },
  {quote:"FAKE LOVE!", author:"BTS",},
  {quote:"으르렁 으르렁 으르렁 대", author:"EXO",},
  {quote:"모두 다 거짓말이야 다 거짓말이야 우리 사랑은 다 거짓말이야", author:"CNBLUE",},
  {quote:"슬퍼하지마 No No No 혼자가아냐 No No No", author:"A-PINK",},
  {quote:"돌아보지 말고 떠나가라 또 나를 찾지 말고 살아가라", author:"BIG BANG",},
  {quote:"언제까지라도 함께 하는거야", author:"소녀시대",},
  {quote:"산소같은 너", author:"샤이니",},
  {quote:"알잖아, 너를 이토록 사랑하며 기다린 나를", author:"쿨",},
  {quote:"자, 이제 시작해 조금씩 뜨겁게 절대 멈추지마", author:"김아중"}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote + " - ";
author.innerText = todaysQuote.author;
//Math.random()  => 0~1까지의 랜덤수
//Math.round()   => 반올림 함수
//Math.ceil()    => 올림 함수
//Math.floor()   => 버림 함수