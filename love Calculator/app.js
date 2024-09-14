function calcLove(){
    let genRandNum = Math.random() * 100
    let result = Math.floor(genRandNum)
    
    
    let resultElement = document.getElementById("result")
    resultElement.innerText = `${result} %`;
}

