'use strict';
// const userName = prompt('Please Enter Name');
// const myName = document.querySelector('.myName').textContent = `😍😍Welcome: ${userName} Good luck 😍😍`;


const myGuess = document.querySelector('.guess');
let number = Math.trunc(Math.random() * 20) + 1, $score = 20, highscore = 0;

const myscore = (score) => document.querySelector('.score').textContent = score;
const displayMesssage = (message) => document.querySelector('.message').textContent = message;
const backgroundBody = (background) => document.querySelector('body').style.backgroundColor = background;
const secNumber = function(text, width) {
    document.querySelector('.number').textContent = text;
    document.querySelector('.number').style.width = width;
}
document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(myGuess.value);
    if(!guess){
        displayMesssage('⛔ Not Number');
    }else if(guess === number){
        displayMesssage('🎉 correct Nameber');
        secNumber(number, '150px');
        backgroundBody('#60b347');
        if($score > highscore){
            highscore = $score;
            document.querySelector('.highscore').textContent = highscore;
        }
    //when guess is worng
    }else if (guess !== number) {
        if($score > 1) {
            displayMesssage(guess > number ? '📈 Too high' : '📉 Too low');
            $score--;
            myscore($score);
        }else {
            displayMesssage('🎇 You Lost the game!');
        }
    }
});

document.querySelector('.again').addEventListener
('click',function(){
    $score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMesssage('Start guessing...');
    backgroundBody('#222');
    secNumber('?', '80px');
    myGuess.value = ' ';
    myscore($score); 

});