'use strict';

const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const score = document.querySelector('.label-score');

const number = document.querySelector('.number');
const secretNumber = Math.trunc(Math.random() * 20 + 1);
number.textContent = secretNumber;

checkBtn.addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  if (!guess) message.textContent = '❌ No number!';
  else if (guess == secretNumber) message.textContent = '🎉 Correct number!';
  else if (Math.abs(guess - secretNumber) < 5)
    message.textContent = 'So close!';
});
