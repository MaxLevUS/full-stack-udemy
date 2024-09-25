const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const squares = [one, two, three, four]


let count = 0;
let sequence = [];
let userSequence = [];
let gameStarted = false;

$(document).on("keypress", function(event){
    if(!gameStarted && (event.key.toLocaleLowerCase()==="a")){
        gameStarted=true;
        $("header").text(`Level ${count}`)
        nextSequence()
    }
})

function nextSequence(){
userSequence=[];
count++;
$(".header").text(`Level ${count}`)

let randomIndex = Math.floor(Math.random()*squares.length)
sequence.push(squares[randomIndex])

playSequence()
}

function playSequence(){
    let i=0;
    const interval = setInterval(()=>{
        blinkSquare(sequence[i]);
        i++;
        if(i>=sequence.length){
            clearInterval(interval)
        }
    }, 600)
}

function blinkSquare(square){
    let originalColor = square.style.backgroundColor;
    square.style.backgroundColor = 'black'

    setTimeout(()=>{
        square.style.backgroundColor = originalColor;
    }, 300)
}

squares.forEach((el, index)=>{
    el.addEventListener('click', function(){
        userSequence.push(el)

    checkUserSequence(userSequence.length-1);
    });

})

function checkUserSequence(currentLevel){
    if(userSequence[currentLevel] !== sequence[currentLevel]){
        gameOver()
    }else if(userSequence.length===sequence.length){
        setTimeout(nextSequence, 1000)
    }
}

function gameOver(){
    $('.header').text("Game Over, Press A to start");
    sequence=[];
    userSequence=[];
    count=0;
    gameStarted=false;
}
















































// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
// const four = document.querySelector("#four");
// const squares = [one, two, three, four]; // Array of squares for easier manipulation

// let count = 0;  // Tracks the current level
// let sequence = [];  // The Simon sequence of colors
// let userSequence = [];  // Tracks the player's inputs
// let gameStarted = false;  // Tracks whether the game is started

// // Start game when key "A" is pressed
// $(document).on("keydown", function(event) {
//     if (!gameStarted && (event.key.toLowerCase() === "a")) {
//         gameStarted = true;
//         $(".header").text(`Level ${count}`);
//         nextSequence();  // Start the sequence
//     }
// });

// // Function to generate the next color in the sequence
// function nextSequence() {
//     userSequence = [];  // Reset user's input for the new round
//     count++;
//     $(".header").text(`Level ${count}`);
    
//     // Generate a random square and add it to the sequence
//     let randomIndex = Math.floor(Math.random() * squares.length);
//     sequence.push(squares[randomIndex]);

//     // Play the current sequence (blink the squares in the sequence)
//     playSequence();
// }

// // Function to blink each square in the current sequence
// function playSequence() {
//     let i = 0;
//     const interval = setInterval(() => {
//         blinkSquare(sequence[i]);
//         i++;
//         if (i >= sequence.length) {
//             clearInterval(interval);
//         }
//     }, 600);  // Delay between each square blinking
// }

// // Function to blink a square
// function blinkSquare(square) {
//     let originalColor = square.style.backgroundColor;
//     square.style.backgroundColor = "black";  // Set to black for the blink effect
//     setTimeout(() => {
//         square.style.backgroundColor = originalColor;  // Revert after 300ms
//     }, 300);
// }

// // Player's choice - listen for clicks on the squares
// squares.forEach((el, index) => {
//     el.addEventListener("click", function() {
//         userSequence.push(el);

//         // Blink the clicked square
//         blinkSquare(el);

//         // Check if the player's sequence is correct so far
//         checkUserSequence(userSequence.length - 1);
//     });
// });

// // Function to check the player's input against the Simon sequence
// function checkUserSequence(currentLevel) {
//     if (userSequence[currentLevel] !== sequence[currentLevel]) {
//         gameOver();
//     } else if (userSequence.length === sequence.length) {
//         // If the player finishes the current sequence correctly, generate a new sequence
//         setTimeout(nextSequence, 1000);
//     }
// }

// // Function to handle game over scenario
// function gameOver() {
//     $(".header").text("Game Over, Press A to Restart");
//     sequence = [];
//     userSequence = [];
//     count = 0;
//     gameStarted = false;
// }

    



