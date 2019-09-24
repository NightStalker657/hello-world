// MAD LIB


// Event Listeners
document.getElementById('madlib').addEventListener('click', madLibButton)

// Event Function
function madLibButton() {
    document.getElementById('para').style.visibility = 'visible';
    
    //Changing text from paragraph to text in input
    var x = document.getElementById('ing').value;
    document.getElementById('verb').innerHTML = x;

    var x = document.getElementById('plur').value;
    document.getElementById('plural').innerHTML = x;

    var x = document.getElementById('adject').value;
    document.getElementById('adjective').innerHTML = x;
    
    var x = document.getElementById('present').value;
    document.getElementById('tense').innerHTML = x;

    var x = document.getElementById('nou').value;
    document.getElementById('noun').innerHTML = x;
}