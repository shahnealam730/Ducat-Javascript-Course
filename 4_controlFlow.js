// // Control Flow/Conditional statements: if,else, else if(multiple conditions)
// // Conditional statements in JavaScript are used to execute code based on certain conditions.
// // syntax:
// // declaration;
// // if(condition){ // if true
// // code to be executed; }
// // else{
// // remaining part}

// // we have two numbers, check which one is  number?
// // let num1 = 20;
// // let num2 = 20;
// // if (num1 > num2) {
// //     alert("Num1 is large number");
// // }
// // else if (num2 > num1) {
// //     alert("Num2 is large number");
// // }
// // else {
// //     alert("Both are equal..");
// // }

// // CONCATINATION:to merge variable and string, variable + string
// // let fullName = "John Doe";
// // let age = 25;
// // My name is John Doe,my age is 25
// // console.log("My name is " + fullName + ",my age is " + age)


// // write a code to check which one is smallest number(2 number)
// // write a code to check whether a person is eligible for vote or not?
// // write a code to check whether a person is senior citizen or not?
// // write a code to check whether a number is positive or negative?
// // write a code to check whether a number is even or odd?
// // Write a code to check whether it is a square or rectangle?
// // let l = 50;
// // let b = 20;
// // if (l == b) {
// //     console.log("It is a square")
// // }
// // else {
// //     console.log("It is a rectangle")
// // }

// // METHOD: Predefined function..
// // USER INPUT: prompt()
// // string to number
// // parseInt(string to integer)
// // parseFloat(string to float)

// // let num1 = parseInt(prompt("Enter a Number"))
// // let num2 = parseInt(prompt("Enter another Number"))
// // console.log(num1 + num2)
// // "10"+"20"
// // 1020

// // let num1 = prompt("Enter a Number")
// // let num2 = prompt("Enter another Number")
// // console.log(num1 * num2)





// // // largest number among three numbers
// let num1 = 30;
// let num2 = 10;
// let num3 = 20;


// if (num1 > num2 && num1 > num3) {
//     console.log("num1 is largest")
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is largest")
// }
// else if (num3 > num1 && num3 > num2) {
//     console.log("num3 is largest")
// }
// else {
//     console.log("Enter a valid input")
// }



// // 2nd largest among three number -> nested if
// if (num1 > num2 && num1 > num3) { // largest - num1
//     if (num2 > num3) { // smallest - num3
//         console.log("num2 is 2nd largest")
//     }
//     else { // num3 > num2
//         console.log("num3 is 2nd largest")
//     }
// }

// else if (num2 > num1 && num2 > num3) { // largest - num2
//     if (num1 > num3) { // smallest - num1
//         console.log("num1 is 2nd largest")
//     }
//     else { // num3 > num2
//         console.log("num3 is 2nd largest")
//     }

// }

//     else if (num3 > num1 && num3 > num2) { // largest - num3
//         if (num1 > num2) { // smallest - num2
//             console.log("num1 is 2nd largest")
//         }
//         else { // num2 > num1
//             console.log("num2 is 2nd largest")
//         }
//     }
//     else {
//         console.log("Enter a valid input")
//     }




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



// // Ternary Operator: shorthand for if-else
// let num1 = 10;
// let num2 = 20;
// let result = (num1 > num2) ? "Num1 is larger" : "Num2 is larger";
// console.log(result);





// SWITCH CASE

// let days = "1"

// switch (days) {
//     case "1":
//         console.log('Sunday');
        
//         break;
//         case "2":
//         console.log('Monday');
//         break;
//     case "3":
//         console.log('Tuesday');
//         break;
//     case "4":
//         console.log('Wednesday');
//         break;
//     case "5":
//         console.log('Thursday');
//         break;
//     case "6":
//         console.log('Friday');
//         break;
//     case "7":
//         console.log('Saturday');
//         break;
        
//     default:
//         break;
// }


// Loops Start Here
