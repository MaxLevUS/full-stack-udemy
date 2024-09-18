let numOfDrums = document.querySelectorAll(".drum").length

for(i=0; i<numOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){   
     var buttonInnerHTML = this.innerHTML;
     makeSound(buttonInnerHTML)  

     buttonAnimation(buttonInnerHTML)
    })

    // Detecting Keyboard Press
    
    document.addEventListener("keypress", function(event){
        makeSound(event.key)

        buttonAnimation(event.key)
    })

    function makeSound(key){
        switch (key) {
            case "w":
                var audio = new Audio("sounds/crash.mp3")
                audio.play()
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play()
                break;
            case "s":
                var audio = new Audio("sounds/snare.mp3")
                audio.play()
                break;
            case "d":
                var audio = new Audio("sounds/tom-1.mp3")
                audio.play()
                break;
            case "j":
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play()
                break;
            case "k":
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play()
                break;
            case "l":
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play()
                break;
        
            default:
                break;
        }
    }


    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 1)

    }
}




// function SoftWareEngineer(name, age, hight, weight, ocup){
//     this.name = name;
//     this.age = age;
//     this.hight = hight;
//     this.weight = weight;
//     this.ocup = ocup = ()=>{
//        return "Can program well!"
//     }
// }

// let maksim = new SoftWareEngineer("Maksim", 43, "185sm", "100kg")

// console.log(maksim.hight)

// const anastasiya = new SoftWareEngineer("Anastasiya", 35, "70kg", "163sm")

// console.log(anastasiya.age)

// console.log(maksim.name, maksim.ocup())