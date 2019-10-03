// Quiz Assignment

// Event Listener
document.getElementById('reveal').addEventListener('click', revealHandler);

//Event Functions

function revealHandler() {
    // Input
    let answer = document.getElementById('answer').value.toLowerCase().trim();
    
    // Output
    if (answer == '190 kg' || answer == '1') {
        console.log('Correct')
        document.getElementById('dashes').innerHTML = 'CORRECT!'
        document.getElementById('dashes').style.color = 'green'
    }   else {
        console.log('Wrong')
        document.getElementById('dashes').innerHTML = 'WRONG!'
        document.getElementById('dashes').style.color = 'red'
    }

    
    
    
    
    // Input
    let answer2 = document.getElementById('answer-two').value.toLowerCase().trim();
    
    // Output
    if (answer2 == 'true' ) {
        console.log('Correct')
        document.getElementById('dashes-two').innerHTML = 'CORRECT!'
        document.getElementById('dashes-two').style.color = 'green'
    
    }   else {
        console.log('Wrong')
        document.getElementById('dashes-two').innerHTML = 'WRONG!'
        document.getElementById('dashes-two').style.color = 'red'
    }

    
    
    
    
    // Input
    let answer3 = document.getElementById('answer-three').value.toLowerCase().trim();
    
    if (answer3 == "i'm still standing" || answer3 == "im still standing") {
        console.log('Correct')
        document.getElementById('dashes-three').innerHTML = 'CORRECT!'
        document.getElementById('dashes-three').style.color = 'green'
        
    
    }   else {
        console.log('Wrong')
        document.getElementById('dashes-three').innerHTML = 'WRONG!'
        document.getElementById('dashes-three').style.color = 'red'
    }

    
    
    
    
    let answer4 = document.getElementById('answer-four').value.toLowerCase().trim();
    
    if (answer4 == "2 minutes") {
        console.log('Correct')
        document.getElementById('dashes-four').innerHTML = 'CORRECT!'
        document.getElementById('dashes-four').style.color = 'green'
    
    }   else {
        console.log('Wrong')
        document.getElementById('dashes-four').innerHTML = 'WRONG!'
        document.getElementById('dashes-four').style.color = 'red'
    }



}