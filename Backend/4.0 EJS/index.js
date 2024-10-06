

// function weekday(){
//     var currentdate = new Date();
// var datetime = (currentdate.getMonth() +1)  + "/" + currentdate.getDay()
// + "/" + currentdate.getFullYear() + " @ " 
// + currentdate.getHours() + ":" 
// + currentdate.getMinutes() + ":" + currentdate.getSeconds();

//     return datetime

// }

// function weekendOrWeekday(){
//     const day = new Date();
//     let d = day.getDate()
//     if(d == 5 || d ==6){
//         return "Hey! It's weekend, it's time to have fun!"
//     }else{
//         return "Hey! It's a weekday, it's time to work hard"
//     }
// }

// document.getElementById("time").innerHTML = weekday()
// document.getElementById("weekday").innerHTML = weekendOrWeekday()


import express from "express";

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Function to check if the current day is a weekday
function getDayType() {
    const today = new Date();
    const day = today.getDay(); // 0 is Sunday, 6 is Saturday
    
    if (day === 0 || day === 6) {
        return { dayType: "the weekend", advice: "it's time to relax!" };
    } else {
        return { dayType: "a weekday", advice: "it's time to work hard!" };
    }
}

app.get("/", (req, res) => {
    const { dayType, advice } = getDayType(); // Get day type and advice
    res.render("index", { dayType, advice });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});