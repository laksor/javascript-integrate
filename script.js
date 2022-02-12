
// onclick handler - 2

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

// id onclick handler - 3

const blueButton = document.getElementById('blue-button');
    blueButton.onclick = makeBlue;
    function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// add Event Listener - 1

const redButton = document.getElementById('red-button');
    redButton.addEventListener('click', makeRed)
    function makeRed(){
        document.body.style.backgroundColor = 'red';
    }

// 2nd way function inside

const hotPink = document.getElementById('hot-pink');
    hotPink.addEventListener('click', function (){
        document.body.style.backgroundColor = 'hotpink';
    })

// 3rd way direct

document.getElementById('khaki').addEventListener('click', function (){
    document.body.style.backgroundColor = 'khaki';
})
