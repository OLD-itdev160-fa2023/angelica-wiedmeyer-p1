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
