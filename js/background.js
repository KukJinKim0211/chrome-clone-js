const images = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg"
];
const random = Math.floor(Math.random() * images.length)
const chosenImage = images[random];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);
console.log(random);

document.body.appendChild(bgImage);