// var helloWorld = "Hello world! 2020"
// console.log(helloWorld, typeof(helloWorld))
// var x;
// var object = null
// console.log(x)
// console.log(object)
// --------------
// var i = 0;
// i += 1;
// i *= 1;
// i /= 1;
// i = 0
// i++ // same i = i + 1
// console.log("i : ", i)
// i = 0;
// ++i // same i = i + 1
// i = 0;
// var j = ++i;
// console.log("i = ", i, ", j = ", j)
// i = 3;
// j = 2;
// var k = i++ + i++ + ++i + ++i + --j + j;
// console.log("K = ", k)

// // if
// var answer = prompt("Is it raining today?", "NO")
// console.log("answer:", answer)

// // var isRaining = answer == "YES"


// if (answer == "NO") {
//     alert("I'm going to school")
// } else {
//     alert("I'm stay at home")
// }
// var mark = prompt("Enter your  mark: ", 0)
// console.log("Mark: ", mark)
/* 
    mark [0, 4) : bad,
    mark [4, 6) : medium,
    mark [6, 8) : good,
    mark [8, 9) : very good,
    mark [9, 10) : exellent
*/
// if (mark < 0 || mark > 10) {
//     console.log("Your mark is not valid")
// }
// else if( mark < 4) {
//     console.log("You're bad")
// }
// else if (mark < 6) {
//     console.log("You're medium")
// }
// else if(mark < 8) {
//     console.log("You're good")
// }
// else if(mark < 9) {
//     console.log("You're very good")
// }
// else if(mark <= 10) {
//     console.log("You're exellent")
// }
// var mark = prompt("Enter month: ", 0);
// month = Number(month)

// switch(month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Spring")
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Summer")
//         break;
// }

// for - while -do while

// for(var i = 0; i < 10; i++) {
//     console.log("I love you", i)
//     // if (i%2 == 0) {
//     // console.log("I love you", i)
//     // }
// }
// var answer
// var number
// do {
//     answer = prompt("Enter Number:","")
//     number = Number(answer)
// } while (Number.isNaN(number)) {
//     if (number % 2 == 0) {
//         alert("Đây là số chẵn")
//     } else {
//         alert("Đây là số lẻ");
//     }
// }

var answer 
var number
do {
    answer = prompt("ENTER NUMBER:")
    number = Number(answer)
} while (Number.isNaN(number))