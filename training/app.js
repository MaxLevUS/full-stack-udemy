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

<<<<<<< HEAD
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
=======
const jsonData = '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

const parsedJsonData = JSON.parse(jsonData)

console.log(parsedJsonData)
>>>>>>> 62ee3c9ab0b65bc358ca8e3eb7ca7545e6a9df18
