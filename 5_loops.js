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


// let guess = prompt("Guess a number..?")
// let secretNumber = 10;
// // print you guessed it right
// // try again

// while (guess != secretNumber) { // 10 == 10
//     guess = prompt("Try again!")
// }
// alert("Correct !")

// FOR LOOP:
// syntax:
// for(initialization;condition;increment/decrement){
// code to be executed}
// 0 -10

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// 0 2 4 6 8 10
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }
// multiplication table of 5 using for loop

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(num + "x" + i + "=" + num * i)
// }

//  Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the
// current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"....

// PRINT THE SQUARE OF NUMBERS FROM 1 TO 15.
// CALCULATE THE SUM OF FIRST 100 NATURAL NUMBERS.
// FACTORIAL OF 5.
//  5! 5 * 4 * 3 * 2 * 1 - while,for
// let num = 6;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact *= i;
// }

// let num = 5;
// let fact = 1;
// while (num > 0) {
//     fact *= num;
//     num--;
// }
// console.log(fact)

// BREAK: IMMEDIETLY EXIT THE LOOP WHEN A CONDITION IS MET.
// STOP SEARCHING WHEN THE ITEM IS FOUND

// 1 - 5
// for (let i = 1; i <= 10; i++) { // 1 - 10
//     if (i == 6) { // 6 == 6
//         break; // jump to 134 line
//     }
//     console.log(i)
// }

//  CONTINUE: SKIT THE CURRENT ITERATION AND JUMP TO THE NEXT ONE.
// SKIP THE UNWANTED VALUES(LIKE EVEN NUMBERS OR BLANKS)

// 1 2 3 4 6  8 9 10
// for (let i = 1; i <= 10; i++) {
//     if (i == 5 || i == 7) { // 5 == 5
//         continue;
//     }
//     console.log(i)
// }


// do-while loop: A do-while loop is similar to a while loop, except that it will always execute the block of code at least once, even if the condition is initially false.
// let i = 10;
// do {
//     // code to be executed
//     // increment/decrement
//     console.log(i); // 10
//     i++;
// }
// // condition
// while (i < 10) // 9 < 10
