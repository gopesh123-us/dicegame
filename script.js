'use strict';

//event - roll the dice
////generate random num and display dice roll
////if score is 1, make the current score to zero switch player
////if score is not 1, add current score to total score and display new score

//event - hold
////add current score to total score if score > 100 - wins -- black and every button is disablled if not switch player
////switch player

//event - reset
////set all score to zero
////set the current player to player-1

//how to code?
////add even handlers to buttons and code each function
/////////////////////////CODE STARTS BELOW/////////////

//generate a random number
let diceRandNum = Math.trunc(Math.random() * 6) + 1;

////selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
let player_1 = document.querySelector('.player--0');
let player_2 = document.querySelector('.player--1');

////starting conditions - put scores to zero and make dice diappear
//declare variables here..
let finalScores, currentScore, activePlayer, playing;

const init = function () {
  //current score and storing final scores in an array
  finalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};
init();

//switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//roll the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random dice rool
    diceRandNum = Math.trunc(Math.random() * 6) + 1;

    //2. Display the dice
    diceEl.classList.remove('hidden');

    //diceEl.setAttribute('src', `dice-${randomNum}.png`);
    diceEl.src = `dice-${diceRandNum}.png`;

    //3. Checked for rolled 1, if true switch to next player
    //NOTE: in the DOM we should not just display the data on the DOM but
    //should also hold the current score in a variable.
    if (diceRandNum != 1) {
      currentScore += diceRandNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch player
      switchPlayer();
    }
  }
});

//entire code below needs to be re-written as per the teacher
btnHold.addEventListener('click', function () {
  if (playing) {
    finalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      finalScores[activePlayer];
    if (finalScores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      diceEl.classList.add('hidden');
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      switchPlayer();
    }
    //add currentscore to finalscore of the active player
    // score0El.textContent = finalScores[0];
    // score1El.textContent = finalScores[1];
  }
});

btnNew.addEventListener('click', init);
