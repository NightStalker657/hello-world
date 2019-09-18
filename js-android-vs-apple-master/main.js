

document.getElementById('android').addEventListener('click', androidChange);
document.getElementById('apple').addEventListener('click', appleChange);

function androidChange() {
    document.getElementById('android-vs-apple').src = 'images/Android-logo.jpg';
    document.getElementById('explore').href = 'https://www.android.com/';
    document.getElementById('explore').style.backgroundColor = '#a4c93b';
    document.getElementById('explore').innerHTML = 'Android Home';
    document.getElementById('main').style.backgroundColor = '#a4c93b';
}

function appleChange() {
    document.getElementById('android-vs-apple').src = 'images/Apple-logo.jpg';
    document.getElementById('explore').href = 'https://www.apple.ca/';
    document.getElementById('explore').style.backgroundColor = '#b6bcca';
    document.getElementById('explore').innerHTML = 'Apple Home';
    document.getElementById('main').style.backgroundColor = '#b6bcca';
}

