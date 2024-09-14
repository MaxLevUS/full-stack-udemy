// let count = 100;

// function beer() {
//   while (count > 0) {
//     console.log(`${count} bottles of beer on the wall, ${count} bottles of beer. 
// Take one down and pass it around, ${count - 1} bottles of beer on the wall.`);
//     count--;
//   }

//   // When count reaches 0, print a special message
//   console.log(`No more bottles of beer on the wall, no more bottles of beer. 
// Go to the store and buy some more, 99 bottles of beer on the wall.`);
// }

// beer();
// console.log(count); // Prints 0 after the loop finishes


// -------------Her solution ----------------

var numberOfBottles = 99;
while (numberOfBottles >= 0) {
  var bottleWord = "bottle";
  if (numberOfBottles === 1) {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}