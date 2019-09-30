//adding a child after
var para1 = document.createElement("p");
var node = document.createTextNode("Up above the world so high");
para1.appendChild(node);

var parent = document.getElementById("div1");
parent.appendChild(para1);

//adding a child before
var para2 = document.createElement("p");
para2.innerHTML = "Like a diamond in the sky";

var child = document.getElementById("p1");
parent.insertBefore(para2, child);

// replacing a child
var para3 = document.createElement("p");
para3.innerHTML = "When the blazing sun is gone";
parent.replaceChild(para3, child);

parent.removeChild(para3);
