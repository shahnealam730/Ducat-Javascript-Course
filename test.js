// // // 1. Check which one is the smallest number (2 numbers)
// // let a = 10;
// // let b = 20;

// // if (a < b) {
// //     console.log(a + " is the smallest");
// // } else {
// //     if (b < a) {
// //         console.log(b + " is the smallest");
// //     } else {
// //         console.log("Both numbers are equal");
// //     }
// // }

// // // 2. Check whether a person is eligible for vote or not
// // let age = 17;

// // if (age >= 18) {
// //     console.log("Eligible for voting");
// // } else {
// //     console.log("Not eligible for voting");
// // }

// // // 3. Check whether a person is a senior citizen or not
// // age = 65;

// // if (age >= 60) {
// //     console.log("Senior Citizen");
// // } else {
// //     console.log("Not a Senior Citizen");
// // }

// // // 4. Check whether a number is positive or negative
// // let num = -5;

// // if (num > 0) {
// //     console.log("Positive number");
// // } else {
// //     if (num < 0) {
// //         console.log("Negative number");
// //     } else {
// //         console.log("Number is zero");
// //     }
// // }


// // // 5. Check whether a number is even or odd
// // let number = 7;

// // if (number % 2 === 0) {
// //     console.log("Even number");
// // } else {
// //     console.log("Odd number");
// // }



// // let length = 5;
// // let breadth = 10;

// // if (length === breadth) {
// //   console.log("Square");
// // } else {
// //   console.log("Rectangle");
// // }


// // let num1 = 10;
// // let num2 = 20;
// // let num3 = 30;

// // if (num1 > num2 && num1 > num3) { // num1 is the largest
// //     if (num2 > num3) {
// //         console.log("num2 is 2nd largest");
// //     } else {
// //         console.log("num3 is 2nd largest");
// //     }
// // } else if (num2 > num1 && num2 > num3) { // num2 is the largest
// //     if (num1 > num3) {
// //         console.log("num1 is 2nd largest");
// //     } else {
// //         console.log("num3 is 2nd largest");
// //     }
// // } else { // num3 is the largest
// //     if (num1 > num2) {
// //         console.log("num1 is 2nd largest");
// //     } else {
// //         console.log("num2 is 2nd largest");
// //     }
// // }




// // Write a JavaScript conditional statement to sort three numbers. Display an alert box to 
// // show the results.    
// // Sample numbers : 0, -1, 4    
// // Output : 4, 0, -1

// // let a = 0, b = -1, c = 4;

// // if (a >= b && a >= c) {
// //     if (b >= c) {
// //         alert(a + ", " + b + ", " + c);
// //     } else {
// //         alert(a + ", " + c + ", " + b);
// //     }
// // } else if (b >= a && b >= c) {
// //     if (a >= c) {
// //         alert(b + ", " + a + ", " + c);
// //     } else {
// //         alert(b + ", " + c + ", " + a);
// //     }
// // } else {
// //     if (a >= b) {
// //         alert(c + ", " + a + ", " + b);
// //     } else {
// //         alert(c + ", " + b + ", " + a);
// //     }
// // }


// // let a = 3;
// // let b = -7;
// // let c = 2;

// // if (a * b * c > 0) {
// //     console.log("The sign is +");
// // } else if (a * b * c < 0) {
// //     console.log("The sign is -");
// // } else {
// //     console.log("The sign is 0");
// // }



// // let year = 2025;

// // if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
// //     console.log(year + " is a leap year");
// // } else {
// //     console.log(year + " is not a leap year");
// // }


// // 90 and above : A
// // 75 to 89 : B
// //50 to 74 : C
// //below 50 : f
// // let marks = 78;

// // if (marks >= 90 && marks <= 100) {
// //     console.log("Grade: A");
// // } else if (marks >= 75 && marks<= 89) {
// //     console.log("Grade: B");
// // } else if (marks >= 50 && marks<= 74) {
// //     console.log("Grade: C");
// // }else if(marks<= 50 && marks >= 0) {
// //     console.log('Grade F')
// // }

// // else {
// //     console.log("Invalid");
// // }


// // let char = 'A';

// // if (
// //     char === 'a' ||
// //     char === 'e' ||
// //     char === 'i' ||
// //     char === 'o' ||
// //     char === 'u' ||
// //     char === 'A' ||
// //     char === 'E' ||
// //     char === 'I' ||
// //     char === 'O' ||
// //     char === 'U'
// // ) {
// //     console.log(char + " is a vowel");
// // } else {
// //     console.log(char + " is not a vowel");
// // }



// // let num = 4;
// //  let res = num % 2 === 0 ? "Even" : "Odd"
// //  console.log(res);



// // let days = "8"
// // switch (days) {
// //     case "1":
// //         console.log('Sunday');
        
// //         break;
// //         case "2":
// //         console.log('Monday');
// //         break;
// //     case "3":
// //         console.log('Tuesday');
// //         break;
// //     case "4":
// //         console.log('Wednesday');
// //         break;
// //     case "5":
// //         console.log('Thursday');
// //         break;
// //     case "6":
// //         console.log('Friday');
// //         break;
// //     case "7":
// //         console.log('Saturday');
// //         break;
        
// //     default:
// //         case "8":
// //         console.log('Invalid day');
// //         break;
// // }


// let num1 = 5;
// let num2 = 10;
// let operator = "-";

// switch (operator) {
//     case "+":
//         console.log("Addition: " + (num1 + num2));
//         break;
//     case "-":
//         console.log("Subtraction: " + (num1 - num2));
//         break;
//     case "*":
//         console.log("Multiplication: " + (num1 * num2));
//         break;
//     case "/":
//         if (num2 !== 0) {
//             console.log("Division: " + (num1 / num2));
//         } else {
//             console.log("Cannot divide by zero");
//         }
//         break;
//     case "%":
//         console.log("Modulus: " + (num1 % num2));
//         break;
//     default:
//         console.log("Invalid operator");
// }





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





