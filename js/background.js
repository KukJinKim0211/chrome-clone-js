const images = [
  "노을.jpg",
  "밤하늘옥상.jpg",
  "벚꽃.jpg",
  "선물.jpg",
  "안드로메다.jpg",
  "집콕.jpg",
  "프렌즈반.jpg",
  "해변서핑.jpg"
];
const random = Math.floor(Math.random() * images.length)
const chosenImage = images[random];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);
console.log(random);

document.body.appendChild(bgImage);