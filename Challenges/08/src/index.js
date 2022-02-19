const clockTitle = document.querySelector(".js-clock");
function merrychristmas() {
  const date = new Date('2022-12-25');
  const nowdate = new Date();
  const timediff = date - nowdate;
  const day = Math.floor(timediff / (1000 * 60 * 60 * 24)); 
  const hour = String(Math.floor((timediff / (1000 * 60 * 60)) % 24)).padStart(2, "0"); 
  const minute = String(Math.floor((timediff / (1000 * 60)) % 60)).padStart(2, "0"); 
  const second = String(Math.floor(timediff / 1000 % 60)).padStart(2, "0");
  
  clockTitle.innerText = `${day}d ${hour}h ${hour}m ${second}s`;
}
merrychristmas();
setInterval(merrychristmas, 1000);