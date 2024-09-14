
// function fizzBuzz(){
//     for(let i=1; i<=100; i++){
//         if(i % 3 == 0){
//             console.log("Fizz")
//         }
//         else if(i % 5 == 0){
//             console.log("Buzz")
//         }
//         else if(i % 3 == 0 && num % 5 == 0){
//             console.log("FizzBuzz")
//         }
//         else{
//             console.log(i)
//         }

//     }
// }

// fizzBuzz()


// function fizzBuzz() {
//     let countFizzBuzz = [];
//     let countFizz = [];
//     let countBuzz = [];
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         countFizzBuzz.push(i)
//       console.log("FizzBuzz");
//     if (i % 3 == 0) {
//         countFizz.push(i)
//       console.log("Fizz");
//     } else if (i % 5 == 0) {
//         countBuzz.push(i)
//       console.log("Buzz");
//     }
//     } else {
//       console.log(i);
//     }
//   }
//   console.log(
//     `Conunt FizzBuzz: ${countFizzBuzz} ,Count Fizz: ${countFizz}, Count Buzz: ${countBuzz} `
//   ); 
// }

// fizzBuzz();


// function fizzBuzz() {
//   let countFizzBuzz = [];
//   let countFizz = [];
//   let countBuzz = [];
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       countFizzBuzz.push(i);
//     } else if (i % 3 == 0) {
//       countFizz.push(i);
//     } else if (i % 5 == 0) {
//       countBuzz.push(i);
//     } 
//   }
//   console.log(
//   `Conunt FizzBuzz: ${countFizzBuzz} ,Count Fizz: ${countFizz}, Count Buzz: ${countBuzz} `
//   ); 
// }
// fizzBuzz();


let myArr = [];
let count = 1;

function pushArr() {
  myArr.push(count);
  count++;
  return myArr;
}

console.log(pushArr());
console.log(pushArr());
console.log(pushArr());
console.log(pushArr());