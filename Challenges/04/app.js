const h1Text = document.querySelector("span");
const superEventHandler = {
h1MouseOver: function(){
  h1Text.innerText = "마우스가 올라왔어요!!";
  h1Text.style.color = "tomato";
},

h1MouseLeave: function(){
  h1Text.innerText = "마우스가 내려갔어요!!";
  h1Text.style.color = "skyblue";
},

windowResize: function(){
  h1Text.innerText = "브라우저의 크기가 변하는 중입니다.....";
  h1Text.style.color = "Yellow";
},

windowContextMenu: function(){
  h1Text.innerText = "마우스 우클릭이 감지되었습니다...";
  h1Text.style.color = "gray";
}
};

h1Text.addEventListener("mouseover", superEventHandler.h1MouseOver);
h1Text.addEventListener("mouseleave", superEventHandler.h1MouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.windowContextMenu);