// LOOPS: a block of code will execute until certain condition met.
// why we need loop?
// Hello world 10th times
// 1 - 10
// 100 - 50
// Basic js:-> While loop, do-while,for
// WHILE LOOP: conditional based
// syntax:
// initization;
// while(condition){ // if true
// code to be executed;
// increment/decrement
// }

// 1 - 10
// let num = 1;
// // while(num <= 10) {
// while (num < 11) { // 10 < 11 , 2<11,3<11 , 11 < 11(false)
//     console.log(num); // 1,2,3
//     // num = num + 1; // 1 + 1 =2,2+1=3,3+1=4 , 10+1=11
//     num++;
// }
// console.log("Loop End")

// let value = 1;
// while (value <= 10) {
//     document.writeln("Hello World...");
//     document.writeln("<br>")
//     value++;
// }

// Print the series: 10,20,30,40,...,100
// let num = 10;
// while (num <= 100) {
//     console.log(num)
//     // num = num + 10;
//     num += 10;
// }
// Print the series: 105,98,91,....,7
// let num = 105;
// while (num >= 7) {
//     console.log(num);
//     num -= 7;
// }

// print even numbers 4 - 20
// let even_num = 4;
// while (even_num <= 20) { // 4 - 20
//     if (even_num % 2 == 0) {
//         console.log("Even Number: " + even_num);
//     } else {
//         console.log("Odd Number: " + even_num)
//     }
//     even_num++;
// }
// calculate the sum of even numbers 10 - 50
// let num = 10;
// let sum = 0;
// while (num <= 50) { // 10 - 50
//     if (num % 2 == 0) { // even numbers - 10,12,14,...50
//         sum += num;
//         // sum = sum + num;
//     }
//     num++;
// }
// console.log("The sum of even numbers: " + sum);


let guess = prompt("Guess a number..?")
let secretNumber = 10;
// print you guessed it right
// try again

while (guess != secretNumber) { // 10 == 10
    guess = prompt("Try again!")
}
alert("Correct !")

