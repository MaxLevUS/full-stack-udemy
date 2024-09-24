let one = document.querySelectorAll("#one")
let two = document.querySelectorAll("#two")
let three = document.querySelectorAll("#three")
let four = document.querySelectorAll("#four")
let squares = document.querySelectorAll(".square").length;


document.querySelectorAll(".square").forEach((el) => {
    el.addEventListener("click", respondFunction);
});

function respondFunction() {
    alert("Clicked");
}


// for(let i=0; i<squares;i++){
//     document.querySelectorAll(".square")[i].addEventListener("click", function(){
//         alert("I've got clicked")
//     })
// }




// $(".square").on("click", function () {
//     $("header").text()
//   $(".header").toggle().fadeOut().fadeIn().text("To start level press A").animate({opacity: 0.5}) 

// })


    // let count = 0;
    // $(".header").on("keypress", function () {
    //         $(".header").text(`Level ${count}`);
    //         count++;
    //          })   







