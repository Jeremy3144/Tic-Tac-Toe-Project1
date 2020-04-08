console.log('awdwad');


var gameBtns = document.querySelectorAll('.btn');

// console.log(gameBtns);

//handle a click depending on user and then display their marker - check
// change players after click - check
// needs to check to see if already used - check
// adds there box to the players playedArray  - check


var isPlayer1 = true;
var boxesPlayed = [];
var p1BoxsPlyd = [];
var p2BoxsPlyd = [];

function handleClick(event) {
  if (event.target.textContent === 'X' || event.target.textContent === 'O') {
    return;
  }

  if (isPlayer1) {
    event.target.textContent = 'X';
    p1BoxsPlyd.push(Number(event.target.dataset.gmbx));
    isPlayer1 = false;
  } else {
    event.target.textContent = 'O';
    p2BoxsPlyd.push(Number(event.target.dataset.gmbx));
    isPlayer1 = true;
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
  [3,4,6],
  [1,5,9],
  [3,5,7]
]

function handleWinner() {
  // p1BoxsPlyd.sort().join("")
  // p2BoxsPlyd.sort().join("")
  for (var i = 0; i < winningBoxes.length; i++) {
    // console.log(winningBoxes[i]);

    if (p1BoxsPlyd.includes(winningBoxes[i])) {
      console.log('awdawda');
    }
    
  }  
}


  

