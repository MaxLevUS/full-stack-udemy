let one = document.querySelectorAll(".one")
let two = document.querySelectorAll(".two")
let three = document.querySelectorAll(".three")
let four = document.querySelectorAll(".four")


// $(".square").on("click", function () {
//     $("header").text()
//   $(".header").toggle().fadeOut().fadeIn().text("To start level press A").animate({opacity: 0.5}) 

// })

let countLevels = 10


    let count = 0;
    $(".header").on("click", function () {
            $(".header").text(`Level ${count}`);
            count++;
             })    



