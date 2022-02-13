
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

// common ways to set event handlers

function handelJustFunctionClick(){
    const p = document.getElementById("clickingMethod");
    p.innerText = 'set by using function';
}

// 2nd way

document.getElementById("handel-event").addEventListener('click', function (){
    const p = document.getElementById("clickingMethod");
    p.innerText = 'set by event listener';
})

// input.value

document.getElementById("update-name").addEventListener('click', function(){
    const nameField = document.getElementById("name-field");
    const p = document.getElementById("nama");
    p.innerText = nameField.value;
    nameField.value = '';
})

// comment post

document.getElementById('submit-comment').addEventListener('click', function (){
    const commentBox = document.getElementById('text-area');
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;
    
    const commentArea = document.getElementById('comment-area');
    commentArea.appendChild(newComment);

    commentBox.value = '';
})