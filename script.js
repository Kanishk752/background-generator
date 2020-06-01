var button=document.getElementById("enter");
var input= document.getElementById("userinput");
var ul=document.querySelector("ul");
var i=1;
// https://www.cambiaresearch.com/articles/15/JavaScript-char-codes-key-codes

function createListElement()
{
var li=document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value="";
}
button.addEventListener("click",function() {
  if(input.value.length>0)
  createListElement();

})
input.addEventListener("keypress", function(event) {
  if(input.value.length>0 && event.keyCode==13)
  createListElement();
});
var css=document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
function colorchanger() {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
}
color1.addEventListener("input",colorchanger);
color2.addEventListener("input",colorchanger);
