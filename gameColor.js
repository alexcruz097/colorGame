var numSquares = 6;
var colors = generateRandomeColor(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorPicker = colorPick();

colorDisplay.textContent = colorPicker;

//Easy functionality
easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  //how many colors
  colors = generateRandomeColor(numSquares);
  //pick a new colors
  colorPicker = colorPick();
  //change display

  colorDisplay.textContent = colorPicker;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    header.style.backgroundColor = "steelBlue";
    message.textContent = " ";
  }
});
//hard functionality
hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  //how many colors
  colors = generateRandomeColor(numSquares);
  //pick a new colors
  colorPicker = colorPick();
  //change display

  colorDisplay.textContent = colorPicker;

  for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].style.display = "block";

  }
  header.style.backgroundColor = "steelBlue";
  message.textContent = " ";
});
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  //action if it is correct
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    var clicked = (this.style.backgroundColor);
    if (clicked === colorPicker) {
      message.textContent = "Correct!!!";
      reset.textContent = "Play Again?";
      header.style.backgroundColor = colorPicker;
      changeColors(colorPicker);
    } else {
      message.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
    }

  });

}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;

  }
}

function colorPick() { //make random color picker
  var random = Math.floor(Math.random() * colors.length);
  //return color
  return colors[random];
}

function generateRandomeColor(num) {
  //build an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //genereate random number
  //red
  var r = Math.floor(Math.random() * 256);
  //green
  var g = Math.floor(Math.random() * 256);
  //blue
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// reset functionality
reset.addEventListener("click", function() {
  //generate all new COLORS
  colors = generateRandomeColor(numSquares);
  //pick a new random color array
  colorPicker = colorPick();
  //change color colorDisplay
  colorDisplay.textContent = colorPicker;
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  header.style.backgroundColor = "steelBlue";
  message.textContent = " ";
  reset.textContent = "NEW COLORS";

});
