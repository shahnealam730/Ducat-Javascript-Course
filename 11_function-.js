// Function: In JavaScript, functions are blocks of code that can be defined and executed to perform a specific task(DOM Events) or set of tasks. They are a fundamental part of the language and allow you to write reusable and modular code.

// function declaration: function functionName(){ // code to be executed}
// function expression:
// annonymous function: function without name
// immedietly invoked function: one time execution
// Arrow function: ES6
// Callback function: function inside arguements
// Clouser: private variable

// function declaration:
// no parameter passed,single parameter, multiple parameter, return type,default parameter
// function greet() {
//     console.log("Hello,User!")
// }
// // function invoking/function calling
// greet();
// greet();

// double/square of 5,8,10,30,2..
// function double(num) { // parameter
//     console.log(num * 2)
// }
// double(5); // arguemnets
// double(8)
// double(10)
// double(30)

// addition(100, 550); // allowed in JS - Hoisting
// function addition(num1, num2) {
//     return num1 + num2;
// }
// console.log(addition(30, 40))


// ** Hoisting: to pull function & variable declaration - var - before ES6

// var num;
// undefined

// console.log(num);
// var num; // declaration
// num = 100; // expression/assignment
// var num;
// console.log(num)
// var num = 100; // undefined
// console.log(num)

// Function Expression/annonymous function:

// greet(); // greet is not a function
// var greet = function () {
//     console.log("This is an anonymous function...")
// }
// // greet(); // This is an anonymous function...

// // greet(); // Cannot access 'greet' before initialization
// let greet = function () {
//     console.log("This is an anonymous function...")
// }

// immedietly invoked function: one time execution - to specific task execution - DOM event

// (function () {
//     console.log("Helloo,there!")
// })();

// reverse a string using function:-> hello -> o,l,l,e,h
// split,reverse,join

// function reverseStr(str) {
//     return str.split('').reverse().join('')
// }
// console.log(reverseStr("hello"))
// console.log(reverseStr("javascript"))
// string - array -> split

// Default Parameter:

// function greet(name = "Guest") {
//     console.log("Helloo " + name)
// }
// greet("John"); // when you put arguement it'll take arguement's value
// greet(); // but if you're not passing any arguement, then it'll take default parameter


// function sum(a, b, c) {
//     console.log(a + b + c)
// }
// sum(20, 40) // 60
// sum(10, 20, 50) // 30
// sum(10) // NaN

// function totalCal(price, tax = 0.1, discount = 10) {
//     return price + price * tax - discount
// }
// console.log(totalCal(200, 0.2, 20))
// console.log(totalCal(200))
// console.log(totalCal(200, 0.2))

// Clouser: function inside function, accessing outer function's variable

// function outerFunction() {
//     let outerVariable = "I'm the varible of Outer Function"; // private variable

//     function innerFunction() {
//         console.log(outerVariable)
//     }
//     innerFunction()
// }
// outerFunction()

// function outerFunction() {
//     let outerVariable = "I'm the varible of Outer Function"; // private variable

//     return function innerFunction() {
//         console.log(outerVariable)
//     }

// }
// const clouser = outerFunction(); // to avoid passing the whole function in arguement
// clouser();


// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         // count = count + 1 = 0 + 1 = 1
//         console.log(count)
//     }
//     return inner()
// }
// outer(); // 1
// outer(); // 1

// for generate new values
function counter() {
    let count = 0; // 1 , 2

    return function () {
        count++; // 2 , 3
        console.log(count)
    }
}
let incremenet = counter();
incremenet(); // 1
incremenet(); // 2
incremenet(); // 3

function addFive() {
    return function (num) {
        return num + 5;
    };
}
const add = addFive();
console.log(add(10)); // 15
console.log(add(2)); // 7