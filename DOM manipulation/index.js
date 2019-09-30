/*Dom Manipulation - Selecting and changing website element*/

var div1 = document.getElementById("div1");

var uniycle = document.getElementsByClassName("unicycle");

var paragraphs = document.getElementsByTagName("p");

var queryUnicycle = document.querySelector("#div2");

var queryAll = document.querySelectorAll(".unicycle, #div2");

var text = "<h2>Hello World!</h2>";

queryUnicycle.innerText = text;

console.log(queryAll);
