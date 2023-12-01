// // // // var firstName = "Mr. Princewill";
// // // // var bestColor = "Gold";
// // // // var age = 67;
// // // // var lastName = "Buchi";
// // // // var stateOfOrigin = "Imo";
// // // // var nationality = "Nigerian";
// // // // var height = 1.68;
// // // // var isMale = true;
// // // // var sick;

// // // var numberOne = 45;
// // // var numberTwo = "45";
// // // var numberThree = 156;
// // // var numberFour = 80;

// // // //PRACTICE LOGIC OPERATOR
// // // //types of logic operator
// // // //And && double ampersand
// // // //Or || double pipe

// // // // var answer = (numberOne>numberTwo) || (numberThree>numberFour)

// // // // console.log(answer)

// // // //CONDITIONAL STATEMENT
// // // //Login system
// // // // var correctPwd = "will1234";
// // // // var userPwd = prompt("Enter the correct password");
// // // // if(correctPwd == userPwd){
// // // //     console.log("Access granted!")
// // // // } else {
// // // //     console.log("Access denied. incorrect password")
// // // // }

// // // // var correctAge = 12;
// // // // var userAge = prompt("Please how old are you? ");
// // // // if(userAge >= correctAge) {
// // // //     console.log("Access granted")
// // // // } else {
// // // //     console.log("Access denied, you are too young.")
// // // // }

// // // var studentClass = prompt("What class are you? Year what??")
// // // switch(studentClass) {
// // //     case "year 7":
// // //         console.log("Enjoy year 7")
// // //         break
// // //     case "year 8":
// // //         console.log("Enjoy year 8")
// // //         break
// // //     case "year 9":
// // //         console.log("Enjoy year 9")
// // //         break
// // //     default:
// // //         console.log("Enjoy the senior class.")
// // //         break
// // // }


// // //DOM
// // //var contain = document.querySelector(".boy");
// // //contain.innerHTML = "This is a girl";
// // //contain.style.backgroundColor = "pink";

// // //ARRAYS
// // var fruits = ["Orange", "Banana", "Mango"];
// // var values = ["Great man", 35, true, "Football"];

// // //console.log(fruits[1]);
// // //console.log(values[3]);

// // var cars = ["Lamborghini", "Royce rolls", "Bugatti", "Prado", "Mayback", "Jesko absolut", "Posche"];

// // cars[6] = "Ferarri";

// // console.log(cars);


// //LOOPS
// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);
// // console.log(5);
// // console.log(6);
// // console.log(7);
// // console.log(8);
// // console.log(9);
// // console.log(10);

// for(var x = 0; x < 11; x=x+2){
//     console.log(x)
// }

// //DEBUGGING\

var box = document.querySelector(".box");
var wordcount = document.querySelector(".wordcount");
var charcount = document.querySelector(".charcount");
var uniquecount = document.querySelector(".uniquecount");

box.addEventListener("input", countNow);

function countNow() {
    var boxValue = box.value.trim();
    var words = boxValue === "" ? 0 : boxValue.split(/\s+/).length;
    var characters = boxValue.length; 
    var uniqueWords = new Set(boxValue.match(/\b\w+\b/g)).size;

    wordcount.innerHTML = "Word : " + words;
    charcount.innerHTML = "Character count : " + characters;
    uniquecount.innerHTML = "Unique counts : " + uniqueWords;
}