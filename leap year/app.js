function isLeap(year){
    if(year % 4 === 0 ){
        console.log(`The year ${year} year is leap!`)
    }
    else if(year % 100 === 0 ){
        console.log(`The year ${year} year is leap!`)
    }
    else if (year % 400 === 0) {
      console.log(`The year ${year} year is leap!`);
    }
     else {
      console.log(`The ${year} year is not leap!`);
    }
}

isLeap(1948)