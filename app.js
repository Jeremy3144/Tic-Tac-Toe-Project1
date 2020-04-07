console.log('awdwad');


var gameBtns = document.querySelectorAll('.btn');

// console.log(gameBtns);

//handle a click depending on user and then display their marker - check
// change players after click - check
// needs to check to see if already used - check
// check for a win


var isPlayer1 = true;
var boxesPlayed = []
function handleClick(event) {
  console.log(event.target.classList.contains('gmbx1'));
  if (event.target.textContent === 'X' || event.target.textContent === 'O') {
    console.log('works');
    return;
  }

  if (isPlayer1) {
    event.target.textContent = 'X';
    isPlayer1 = false;
  } else {
    event.target.textContent = 'O';
    isPlayer1 = true;
  }
}


gameBtns.forEach(function(btn) {
  btn.addEventListener('click', handleClick);
})