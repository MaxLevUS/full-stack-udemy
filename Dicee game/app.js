let randomNum1 = Math.floor(Math.random()*6) + 1;

let pict1 = "images/dice" + randomNum1 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", pict1)

let randomNum2 = Math.floor(Math.random()*6) + 1;
let pict2 = "images/dice" + randomNum2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", pict2)

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!!"
}
else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 wins!!!"
}
else{
    document.querySelector("h1").innerHTML = "Draw."
}