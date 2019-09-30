function changeColor(obj) {
  obj.style.color = "Peru";
}

// click me !!! //
document.getElementById("myBtn").onclick = changeBgColor;

function changeBgColor() {
  document.querySelector("body").style.backgroundColor = "MediumOrchid";
}
