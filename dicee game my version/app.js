
let img1 = document.getElementsByClassName("img")[0]
let img2 = document.getElementsByClassName("img")[1]

let header = document.getElementsByClassName("header")


let pictureContainer = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];


function shufflePict(arr){
    randomPict = Math.random() * pictureContainer.length;
    return arr[Math.floor(randomPict)]
}


function changeImage(){
    let dice1 =  shufflePict(pictureContainer)
    let dice2 = shufflePict(pictureContainer)

    img1.src = dice1;
    img2.src = dice2

    if(dice1 > dice2){
        header.innerText = "Dice One Won!"
    }else if(dice1<dice2){
        header.innerText = "Dice One Won!";
    }else{
        header.innerText = "Dice One Won!";
    }
}

window.onload = function () {
  changeImage();
};





