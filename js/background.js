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
const bodyback = document.querySelector("body");
bodyback.style.backgroundImage.url = '../img/노을.jpg'
function backGroundImageRandom() {
  bodyback.style.backgroundImage = `url(../img/${chosenImage}`;
}
backGroundImageRandom();
/*function paintImage() {
  const image = new Image();
  image.src = `img/${chosenImage}`; // 가져올 image경로 지정
  image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
  bodyback.appendChild(image); // body의 자식에 image추가
}
//bgImage.src = `img/${chosenImage}`;
paintImage();
console.log(bgImage);
console.log(random);

document.body.appendChild(bgImage);*/