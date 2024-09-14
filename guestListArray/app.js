var guestList = ["Maksim", "Anastasiya", "Yelizaveta", "Yekaterina"];

var promptGuests = prompt("Insert the name")
function checkNames(arr) {
  if (arr.includes(promptGuests)) {
    console.log("Wellcome");
  } else {
    console.log("Not authorized");
  }
}

checkNames(guestList);
