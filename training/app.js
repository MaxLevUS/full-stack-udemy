// var insertText = prompt("Insert the text")
// var insertedText = insertText
// var maxLength = 12
// var slicedText = insertedText.slice(0, 13)

// document.write(`${slicedText}. You have written ${insertedText.length} characters left
// ${maxLength - insertedText.length}`)

// function lifeInWeeks(age){
//     var avalableLifeTime = 90;
//     var myAgeByMonths = age * 12
//     var myAgeByWeeks = age * 52
//     var myAgeByDays = age * myAgeByWeeks * 7
//     var restDaysUntilAval = (avalableLifeTime * 365) - myAgeByDays
//     console.log(myAgeByMonths, myAgeByWeeks, myAgeByDays, restDaysUntilAval)
// }
// lifeInWeeks(43)

// function bmiFn(weight, height) {
//   bmi = weight / (height * height); 
//   return `If your weight is ${weight} and your height is ${height} your BMI will be ${Math.round(bmi, 2)}`
// }

// console.log(bmiFn(110, 1.85));



// const countNum = (a, b)=>{
//     if(a<b){
//         console.log("first number should be bigger that the second one!")
//     }else{
//         let count = 0;
//         let sum = 0;
//         for(let i=a; i >= b; i--){
//         count++
//         console.log(`${count}) ${i}`)
//         sum +=i
//         }
//         console.log(`sum: ${sum}`)
//     }
     
// }
// countNum(9, 2)


//     let dishes = [];

//     let qtyOfDishes = parseInt(prompt("How many dishes would you like to have?"))
    
//     for(let i = 0; i < qtyOfDishes; i++){
//         dishes[i] = prompt("Insert the dishes");
        
//     }
//     document.write("Your dishes: <br>")
//     for(let i = 0; i <=dishes.length;i++){
//         document.write(`${i+1}. ${dishes[i]}` + "<br>")
//     }
// let search = prompt("Which dish would you like to have?");


// for(let i = 0; i<=dishes.length;i++){
//     if(dishes[i] === search){
//         document.write(`The dish ${search} exist.`);
//         break;
//     }else{document.write("We don't have such dish in a list")
//         break;
//     }
// }



// let menu = parseInt(prompt("1: Add dishes, 2. Get all dishes, 3. Remove dish"))

// let myArr = ["a", "b", "c"]

// for(let i in myArr){
//     console.log(i) // 0, 1, 2
// }

// for(let i of myArr){
//     console.log(i) // a, b, c
// }

// const a = 5;

// function returnA(){
//     console.log(a);
//     var a = 10;
// }

// returnA()

for(let i=0;i<=5;i++){
    setTimeout(function(){
        console.log(i)
    }, i*600)
}