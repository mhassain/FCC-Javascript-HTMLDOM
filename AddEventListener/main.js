var myP = document.getElementById("myP");
var myDiv = document.getElementById("myDiv");
var myP2 = document.getElementById("myP2");
var myDiv2 = document.getElementById("myDiv2");

myP.addEventListener("click", function() {
  myDiv.style.background = "lightblue";
});

// myP.onclick = function(){ myDiv.style.background = "lightblue" };

myP.addEventListener("click", changeText);

function changeText() {
  myP2.textContent +=
    "According to a Cornell publication, the answer is ~700 pounds.";
}

myDiv.addEventListener("click", changeText2);

function changeText2() {
  myP2.textContent += "The Real Answer";
}
