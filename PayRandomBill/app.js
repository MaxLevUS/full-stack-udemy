let myArr = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    let qtyOfPeople = names.length;
    let random = Math.random() * qtyOfPeople;
    let flooredNum = Math.floor(random)
    let chooseName = names[flooredNum];
  console.log(`${chooseName} is going to buy lunch today.`)
}

whosPaying(myArr)
