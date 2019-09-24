'use strict';

// Fahrenheit to Celsius

//Event Listener

document.getElementById('convert').addEventListener('click', convertTime)

//Event Function

function convertTime() {

    //Getting x value
    var fahr_temp = document.getElementById('fahren').value;
    

    //23.444444...
    // multiple fahr_temp by 100
    fahr_temp = fahr_temp * 100

    //2344.44444....
    // round using Math.round()

    fahr_temp = Math.round(fahr_temp)
    //2344
    
    // divide by 100
    fahr_temp = fahr_temp/100
    

    document.getElementById('dashes').innerHTML = ((fahr_temp - 32) * 5)/9
}