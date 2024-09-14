// function fibonacci(num){
//     let count = 0;    
//     let count2 = 1

//     for(let i=1; i<=num;i++){
//         sum = count + count2;
//         count = count2
//         count2 = sum
//         console.log(sum)
//     }
//     return count2
// }

// console.log(fibonacci(10))
// ====================================================
// function fibonacci(num){
//     let firstSum = 0;
//     let secondSum = 1;
//     let sum = [];

//     for(i=0; i<=num; i++){
//         let result = firstSum + secondSum;
//         firstSum = secondSum;
//         secondSum = result
//         sum.push(result)
//     }
//     return sum
// }

// console.log(fibonacci(10))
// =====================================================
// function fibonacciGenerator(n) {
//   //Do NOT change any of the code above 👆

//   //Write your code here:
//   let sum = [];

//   // Handle edge cases
//   if (n === 0) return sum; // Return an empty array for n = 0
//   if (n === 1) return [0]; // Return [0] if n = 1

//   // Initialize the first two numbers in the Fibonacci sequence
//   let firstSum = 0;
//   let secondSum = 1;

//   // Push the first two Fibonacci numbers
//   sum.push(firstSum);
//   sum.push(secondSum);

//   // Loop to generate the remaining Fibonacci numbers
//   for (let i = 2; i < n; i++) {
//     let result = firstSum + secondSum;
//     firstSum = secondSum;
//     secondSum = result;
//     sum.push(result); // Push each new Fibonacci number into the array
//   }

//   return sum;

//   //Return an array of fibonacci numbers starting from 0.

//   //Do NOT change any of the code below 👇
// }

// ========================================================


function fibonacci(n){
    var output = [];
    if(n===1){
        output = [0]
    }
    else if(n === 1){
        output = [0, 1]
    }
    else{
        output = [0, 1];
        for(var i = 2; i<=n; i++){
output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
return output

}

console.log(fibonacci(10));

let myArr = [
   0, 1,  1,  2,  3,
   5, 8, 13, 21, 34,
  55
]

console.log(myArr.length - 2 )
