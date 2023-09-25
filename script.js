'use strict';

let secretNumber = generateSecret();
let score = 20;
let high = 0;
// console.log(secretNumber);

document.querySelector('.check').addEventListener('click', checkBtn);
document.querySelector('.again').addEventListener('click', againBtn);

function checkBtn() {
    let guess = Number(document.querySelector('.guess').value);
    if(guess <= 0 || guess > 20) {
        displayMessage('🛑 Guess Out of Bounds');
    } else if(guess === secretNumber) {
        correctAns();
    } else {
        let message = guess>secretNumber ? '☝️ Too High' : '👇 Too Low';
        displayMessage(message);
        score--;
        document.querySelector('.score').textContent = score;
    }
}

function correctAns() {
    displayMessage('🎊 Correct Answer');
    document.querySelector('body').style.backgroundColor = '#32CD32';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if(high === 0){
        high = score;
        document.querySelector('.highscore').textContent = high;
    } else {
        if(score > high) document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.check').removeEventListener('click', checkBtn);
}

function againBtn() {
    score = 20;
    secretNumber = generateSecret();
    displayMessage('Start Guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.check').addEventListener('click', checkBtn);
}

function generateSecret() {
    return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}