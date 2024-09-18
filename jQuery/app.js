console.log($("h1").css("color", "red"))
console.log($("h1").css("font-size"))
$("h1").css("font-size", "5rem")
$("h1").addClass("big-heading")
$("h1").removeClass("big-heading")
$("h1").addClass("big-heading margin")
$("h1").hasClass("margin")
$("button").text("Don't Click Me") // using exactly the button area
$("button").html("<em>Hey</em>") // using entire HTML document. If we have .text(that give 
// us "<em>Hey</em>")

$("img").attr("src") // adding photo
$("a").attr("href", "https://www.yahoo.com") // set the attribute 
