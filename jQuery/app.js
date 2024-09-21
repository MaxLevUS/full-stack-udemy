console.log($("h1").css("color", "red"))
console.log($("h1").css("font-size"))
$("h1").css("font-size", "5rem")
$("h1").addClass("big-heading")
$("h1").removeClass("big-heading")
$("h1").addClass("big-heading margin")
$("h1").hasClass("margin")
/$("button").text("Don't Click Me") // using exactly the button area
$("button").html("<em>Hey</em>") // using entire HTML document. If we have .text(that give 
// us "<em>Hey</em>")

$("img").attr("src") // adding photo
$("a").attr("href", "https://www.yahoo.com").attr("target", "_blank"); // set the attribute 

let allButtons = document.querySelectorAll("button")
let h1Text = document.querySelector("h1")

// $("button").on("click", function(){
//     $("h1").css("color", "purple")
// })

// $("input").on("keypress", function(event){
//     $("h1").text(event.key);
// })

$("h1").on("mouseover", function(event){
    $("h1").css("color", "purple")
})

$("h1").before("<button>Before New Button</button>")//before opened tag
$("h1").after("<button>After New Button</button>") //after opened tag
$("h1").prepend("<button>Prepend New Button</button>") // before the content
$("h1").append("<button>Append New Button</button>") //after the content

// $("h1").remove()
// $("h1").hide()
// $("h1").show()
// $("h1").toggle()


// $("button").on("click", function(){
//     $("h1").toggle().fadeOut() //fadeOut - disappear smoothly
// })

//     $("h1").toggle().fadeOut() //fadeIn - pop up smoothly
// })


//     $("h1").slideDown() //fadeOut - Uncollapse smoothly
// })

// $("h1").on("click", function(){
// $("h1").slideUp(); //smoothly slideUp
// })

// $("h1").on("click", function(){
// $("h1").slideUp(); //smoothly collapse up
// })


// $("button").on("click", function(){
// $("h1").slideToggle(); //smoothly collapse up and uncollapse down
// // very useful for the dropdown menu
// })


$("button").on("click", function(){
$("h1").slideUp().slideDown().animate({opacity: 0.5, margin: "20px"}); 
})


// $("button").on("click", function(){
// $("h1").animate({opacity: 0.5, margin: "20px"}); 
// })

// $("button").on("click", function(){
//     $("h1").toggle().fadeOut() //fadeOut - disappear smoothly
// })
// $("button").on("click", function(){
//     $("h1").toggle()
// })




// allButtons.forEach((el)=>{
//     el.addEventListener("click", ()=>{
// h1Text.innerText = `Hi from button ${el.innerText}`
//     })
// })

// $("button").on("click", function () {
//   setInterval(() => {
//     $("h1").css("color", "purple");
//   }, 1000);
// });

// $("button").on("click", function () {
//   setInterval(() => {
//     $("h1").css("color", function (index, currentColor) {
//       return currentColor === "purple" ? "black" : "purple"; // Toggle between purple and black
//     });
//   }, 1000);
// });


// $("button").on("click", function () {
//   // Store the original color of the <h1> element
//   const originalColor = $("h1").css("color");

//   // Change the color to purple
//   $("h1").css("color", "purple");

//   // Set a timeout to change the color back to the original after 1 second
//   setTimeout(() => {
//     $("h1").css("color", originalColor);
//   }, 1000);
// });