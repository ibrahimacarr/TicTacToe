// Restart the game
var restartButton = document.querySelector("a");

//All cells
var cells = document.querySelectorAll("td");


// Set content to a cell
function setContent(){
  if (this.textContent == ''){
    this.textContent = 'X'
  }
  else if (this.textContent == 'X'){
    this.textContent = 'O'
  }
  else if (this.textContent == 'O'){
    this.textContent = ''
  }
  else{
    alert('WRONG!')
  }
};

// Clear a Table
function clearTable(){
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
  }
}

// Add clearTable event to restartButton
restartButton.addEventListener('click', clearTable);


// Add Click event for all cells
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', setContent)
}
