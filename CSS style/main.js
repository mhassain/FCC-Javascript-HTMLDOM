/* Setting and getting CSS style */

var line = document.getElementById("line");
var attribute = document.getElementById("attribute");

line.style.background = "red";
attribute.style.boxShadow = "2px 2px 5px 1px blue";

line.style.cssText = "color: blue; border: 1px solid black";

attribute.setAttribute("style", "color: red; border: 1px solid blue ");

console.log(line.style);
console.log(window.getComputedStyle(line));
