
var gameBtns = document.querySelectorAll('.btn');
var plyrAsignBtn = document.querySelector('.plyr-asign-btn')
var nxtGameBtn = document.querySelector('.nxt-game-btn')
var resetBtn = document.querySelector('.reset-btn')


var isPlayer1 = true;
var boxesPlayed = [];
var p1BoxsPlyd = [];
var p2BoxsPlyd = [];
var hasWon = false;
var p1Score = 0;
var p2Score = 0;
// .includes the boxes played array for if it cn be used or not
function handleClick(event) {
  if (event.target.textContent === 'X' || event.target.textContent === 'O' || hasWon === true) {
    return;
  }

  if (isPlayer1) {
    event.target.textContent = 'X';
    p1BoxsPlyd.push(Number(event.target.dataset.gmbx));
    boxesPlayed.push(event.target.dataset.gmbx)
    isPlayer1 = false;
  } else {
    event.target.textContent = 'O';
    p2BoxsPlyd.push(Number(event.target.dataset.gmbx));
    boxesPlayed.push(event.target.dataset.gmbx)
    isPlayer1 = true;
  }
  if (p1BoxsPlyd.length >= 3) {
    handleWinner();
  }
}


gameBtns.forEach(function(btn) {
  btn.addEventListener('click', handleClick);
})



var winningBoxes = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];

function handleWinner() {

  for (var i = 0; i < winningBoxes.length; i++) {
    if (p1BoxsPlyd.includes(winningBoxes[i][0]) && p1BoxsPlyd.includes(winningBoxes[i][1]) && p1BoxsPlyd.includes(winningBoxes[i][2])) {
      console.log('player1 wins');
      hasWon = true;
      p1Score += 1;
      
    } else if (p2BoxsPlyd.includes(winningBoxes[i][0]) &&          p2BoxsPlyd.includes(winningBoxes[i][1]) && p2BoxsPlyd.includes(winningBoxes[i][2])) {
      console.log('player2 wins');
      hasWon = true;
      p2Score += 1;

    }
    
  }  
  if (boxesPlayed.length === 9 && hasWon === false) {
    console.log('Its a draw');
    
  }
}

function handleNextGame() {
  isPlayer1 = true;
  boxesPlayed = [];
  p1BoxsPlyd = [];
  p2BoxsPlyd = [];
  hasWon = false;
  gameBtns.forEach(function(box){
    box.textContent = ""
  })
}

nxtGameBtn.addEventListener('click', handleNextGame);

function handleReset() {
  isPlayer1 = true;
  boxesPlayed = [];
  p1BoxsPlyd = [];
  p2BoxsPlyd = [];
  hasWon = false;
  p1Score = 0;
  p2Score = 0;
  gameBtns.forEach(function(box){
    box.textContent = ""
  })
}

resetBtn.addEventListener('click', handleReset);

  

