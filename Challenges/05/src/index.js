
function windowResize() {
  const size = window.innerWidth;
  console.log("0");
  if (size > 1200)
    document.body.className = "colortomato";
  else if (size > 900)
    document.body.className = "colorteal";
  else
    document.body.className = "coloryellow";
}

window.addEventListener("resize", windowResize);
