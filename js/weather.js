// 
const API_Key = "700cbd28d20ca5e06a722c72d1987b35";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  console.log("You live in ", lat, lng);

  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_Key}&units=metric`;
 // console.log(url);
  fetch(url).then(response => response.json()).then(data => {
    const weatherContainer = document.querySelector("#weather span:first-child");
    const cityContainer = document.querySelector("#weather span:last-child");
    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp_min} ~ ${data.main.temp_max} `;
    cityContainer.innerText = data.name;

    //console.log(data.name, data.weather[0].main)
  });
}

//https://api.openweathermap.org/data/2.5/weather?lat=35.1107285&lon=128.920931&appid=700cbd28d20ca5e06a722c72d1987b35

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);