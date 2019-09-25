'use strict';

// Trapezoid Area

// Event Listener
document.getElementById('calc').addEventListener('click', trapezoidArea)

// Event Function
function trapezoidArea() {

    // Getting variables
    var tb = document.getElementById('top').value;
    var bb = document.getElementById('bot').value;
    var hgt = document.getElementById('height').value;
    
    //inputting values into equation
    document.getElementById('dashes').innerHTML = ((tb + bb)*hgt) * 1/2;
}