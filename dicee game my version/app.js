// Select the images by their class name
let img1 = document.getElementsByClassName("img")[0];
let img2 = document.getElementsByClassName("img")[1];

// Select the header to update the result
let header = document.querySelector(".header h1");

// Array of image paths
let pictureContainer = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

// Shuffle and return a random dice image
function shufflePict(arr) {
  let randomPict = Math.floor(Math.random() * arr.length); // Correct random calculation
  return arr[randomPict];
}

// Get the dice value from the image file name by extracting the number from the path
function getDiceValue(diceImg) {
  return parseInt(diceImg.charAt(diceImg.length - 5)); // The dice number is 1-6, right before ".png"
}

function changeImage() {
  let dice1 = shufflePict(pictureContainer);
  let dice2 = shufflePict(pictureContainer);

  // Change the image sources
  img1.src = dice1;
  img2.src = dice2;

  // Get dice values (e.g., 1, 2, 3...)
  let dice1Value = getDiceValue(dice1);
  let dice2Value = getDiceValue(dice2);

  // Determine the winner
  if (dice1Value > dice2Value) {
    header.innerText = "Player 1 Won!";
  } else if (dice1Value < dice2Value) {
    header.innerText = "Player 2 Won!";
  } else {
    header.innerText = "It's a Draw!";
  }
}

// Call changeImage function on page load
window.onload = function () {
  changeImage();
};
