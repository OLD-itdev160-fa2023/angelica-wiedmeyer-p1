
alert("Boo!");

document.getElementById("colors").onmouseover = function() {mouseOver()};
document.getElementById("colors").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("colors").style.color = "red";
}

function mouseOut() {
  document.getElementById("colors").style.color = "black";
}


function changeColor(){
    document.body.style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')';
}

function two() {
    document.getElementById("1408").src = "images/1408-2.jpg"
 } 

 function one() {
    document.getElementById("1408").src = "images/1408-1.jpg"
 } 



 function second() {
    document.getElementById("clown").src = "images/it2.jpg"
 } 

 function first() {
    document.getElementById("clown").src = "images/it1.jpg"
 } 

 function even() {
    document.getElementById("hellraiser").src = "images/hellraiser2.jpg"
 } 

 function odd() {
    document.getElementById("hellraiser").src = "images/hellraiser1.jpg"
 } 



function four() {
    document.getElementById("ritual").src = "images/ritual2.jpg"
 } 

 function three() {
    document.getElementById("ritual").src = "images/ritual1.jpg"
 } 


 function dos() {
    document.getElementById("conjuring").src = "images/conjuring2.jpg"
 } 

 function uno() {
    document.getElementById("conjuring").src = "images/conjuring1.jpg"
 } 






