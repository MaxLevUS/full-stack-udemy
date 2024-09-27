const green = $("#green")
const red = $("#red")
const yellow = $("#yellow")
const blue = $("#blue")

const btn = $(".btn");

let userClickedPattern = []
let gamePattern = [];

const buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor)

    $("#" + randomChosenColor)
      .fadeOut(100)
      .fadeIn(100);
      playSound(randomChosenColor);
      console.log(gamePattern)
}


function playSound(melody) {
  var snd = new Audio(melody);
  snd.play();
}

btn.on("click", function () {
  let userChosenColor = this.id
  userClickedPattern.push(userChosenColor)

  playSound(userChosenColor);
  animatePress(userChosenColor)
});


function animatePress(currentColor) {
currentColor.addClass("pressed");
setTimeout(function () {
  currentColor.removeClass("pressed");
}, 100);
}

animatePress()

nextSequence();
