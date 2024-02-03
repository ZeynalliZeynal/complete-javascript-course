'use strict';

const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
const scoreLabel = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const highscore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscoreNumber = 0;

checkBtn.addEventListener('click', () => {
  const guess = +guessInput.value;
  if (!guess) {
    message.textContent = '❌ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (score > highscoreNumber) {
      highscoreNumber = score;
      highscore.textContent = highscoreNumber;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreLabel.textContent = score;
    } else {
      message.textContent = 'you lost the game!';
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222222';
  message.textContent = 'Start guessing...';
  guessInput.value = '';
  number.textContent = '?';
  number.style.width = '15rem';
  scoreLabel.textContent = score;
});
