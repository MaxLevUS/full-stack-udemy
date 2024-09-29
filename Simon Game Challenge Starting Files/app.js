const green = $("#green");
const red = $("#red");
const yellow = $("#yellow");
const blue = $("#blue");

const btn = $(".btn");

let userClickedPattern = [];
let gamePattern = [];

const buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor)
      .fadeOut(100)
      .fadeIn(100);
    
    playSound(randomChosenColor);
}

function playSound(color) {
  var snd = new Audio("sounds/" + color + ".mp3"); // Assuming you have sounds named red.mp3, green.mp3, etc.
  snd.play();
}

btn.on("click", function () {
  let userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userChosenColor)
});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed"); // Now selecting the button element with the color id
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(currentLevel){
  if(currentLevel === gamePattern[gamePattern.length - 1]){
    console.log("Success!")
  }else{
    console.log("Wrong!!!")
  }
}
 
// Trigger the first sequence
nextSequence();