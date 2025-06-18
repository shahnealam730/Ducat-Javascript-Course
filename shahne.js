// // // // // // // // // // // // // // 1. Write a function to add two numbers and return the result.

// // // // // // // // // // // // // // function addTwoNumbers(a, b) {
// // // // // // // // // // // // // //     return a + b;
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log(addTwoNumbers(5, 3)); 


// // // // // // // // // // // // // // 2. Write a function to reverse a given string.

// // // // // // // // // // // // // // function reverseString(str) {
// // // // // // // // // // // // // //     return str.split('').reverse().join('');
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // // console.log(reverseString("hello")); 

// // // // // // // // // // // // // // 3. Create a function that returns the square of a number
// // // // // // // // // // // // // function squareNumber(num) {
// // // // // // // // // // // // //     return num * num;
// // // // // // // // // // // // // }
// // // // // // // // // // // // // console.log(squareNumber(4)); 

// // // // // // // // // // // // // // 4. Write a function to check if a number is even or odd.
// // // // // // // // // // // // // function isEvenOrOdd(num) {
// // // // // // // // // // // // //     return num % 2 === 0 ? "Even" : "Odd";
// // // // // // // // // // // // // }
// // // // // // // // // // // // // console.log(isEvenOrOdd(7));


// // // // // // // // // // // // // 5. Write a function to count the number of vowels in a string

// // // // // // // // // // // // function countVowels(str) {
// // // // // // // // // // // //     const vowels = 'aeiouAEIOU';
// // // // // // // // // // // //     let count = 0;
// // // // // // // // // // // //     for (let char of str) {
// // // // // // // // // // // //         if (vowels.includes(char)) {
// // // // // // // // // // // //             count++;
// // // // // // // // // // // //         }
// // // // // // // // // // // //     }
// // // // // // // // // // // //     return count;
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(countVowels("Hello World")); 


// // // // // // // // // // // // 6. Write a function to return the factorial of a number.

// // // // // // // // // // // let num = 5;
// // // // // // // // // // // let factorial = 1;
// // // // // // // // // // // for (let i = 1; i <= num; i++) {
// // // // // // // // // // //     factorial *= i;
// // // // // // // // // // // }
// // // // // // // // // // // console.log(`Factorial of ${num} is ${factorial}`);



// // // // // // // // // // // // 7. Write a function to convert a temperature from Celsius to Fahrenheit
// // // // // // // // // // // function celsiusToFahrenheit(celsius) {
// // // // // // // // // // //     return (celsius * 9/5) + 32;
// // // // // // // // // // // }
// // // // // // // // // // // console.log(celsiusToFahrenheit(25));



// // // // // // // // // // // 8. Write a program that checks whether a number is positive, negative, or zero

// // // // // // // // // // // let number = 10;
// // // // // // // // // // // if (number > 0) {
// // // // // // // // // // //     console.log("The number is positive.");
// // // // // // // // // // // } else if (number < 0) {
// // // // // // // // // // //     console.log("The number is negative.");
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log("The number is zero.");
// // // // // // // // // // // }


// // // // // // // // // // // 9. Write a function that takes age as input and returns "Adult" if age >= 18, otherwise "Minor".

// // // // // // // // // // // let age = 16;
// // // // // // // // // // // if (age >= 18) {
// // // // // // // // // // //     console.log("Adult");
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log("Minor");
// // // // // // // // // // // }   




// // // // // // // // // // // 10. Write a program to check whether a year is a leap year.

// // // // // // // // // // // let year = 2020;
// // // // // // // // // // // if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
// // // // // // // // // // //     console.log(`${year} is a leap year.`);
// // // // // // // // // // // } else {
// // // // // // // // // // //     console.log(`${year} is not a leap year.`);
// // // // // // // // // // // }



// // // // // // // // // // // 11. Print numbers from 1 to 10 using a for loop.

// // // // // // // // // // // for (let i = 1; i <= 10; i++) {
// // // // // // // // // // //     console.log(i);
// // // // // // // // // // // }



// // // // // // // // // // // 12. Print the multiplication table of 5 using a loop
// // // // // // // // // // let number = 5;
// // // // // // // // // // for (let i = 1; i <= 10; i++) {
// // // // // // // // // //     console.log(`${number} x ${i} = ${number * i}`);
// // // // // // // // // // }


// // // // // // // // // // 13. Write a function that returns the sum of all numbers in an array.
// // // // // // // // // let numbers = [1, 2, 3, 4, 5];

// // // // // // // // // function sumArray(arr) {
// // // // // // // // //     let sum = 0;
// // // // // // // // //     for (let num of arr) {
// // // // // // // // //         sum += num;
// // // // // // // // //     }
// // // // // // // // //     return sum;
// // // // // // // // // }
// // // // // // // // // console.log(sumArray(numbers)); 


// // // // // // // // // 14. Write a program to find the maximum number in an array.

// // // // // // // // let numbersArray = [10, 20, 5, 40, 30];

// // // // // // // // function findMax(arr) {
// // // // // // // //     let max = arr[0];
// // // // // // // //     for (let num of arr) {
// // // // // // // //         if (num > max) {
// // // // // // // //             max = num;
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // //     return max;
// // // // // // // // }
// // // // // // // // console.log(findMax(numbersArray));



// // // // // // // // 15. Print even numbers between 1 and 20 using a while loop
// // // // // // // let i = 1;
// // // // // // // while (i <= 20) {
// // // // // // //     if (i % 2 === 0) {
// // // // // // //         console.log(i);
// // // // // // //     }
// // // // // // //     i++;
// // // // // // // }



// // // // // // // 16. Write a function that filters out all odd numbers from an array.
// // // // // // let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // // // function filterOddNumbers(arr) {
// // // // // //     return arr.filter(num => num % 2 === 0);
// // // // // // }
// // // // // // console.log(filterOddNumbers(numbersList)); 




// // // // // // 17. Write a function that returns the names from an array of user objects.
// // // // //  const users = [
// // // // //  { id: 1, name: "Alice" },
// // // // //  { id: 2, name: "Bob" }
// // // // //  ];

// // // // // function getUserNames(userArray) {
// // // // //     return userArray.map(user => user.name);}
// // // // // console.log(getUserNames(users));



// // // // // 18. Create an array of numbers to double every element using for loop.

// // // // let numbersToDouble = [1, 2, 3, 4, 5];
// // // // for (let i = 0; i < numbersToDouble.length; i++) {
// // // //     numbersToDouble[i] *= 2;
// // // // }
// // // // console.log(numbersToDouble); 




// // // // 19. Explain closure in JavaScript and give an example.
// // //  function outer() {
// // //  let count = 0;
// // //  return function inner() {
// // //  count++;
// // //  return count;
// // //  };
// // //  }
// // //  const counter = outer();
// // //  console.log(counter()); // 1
// // //  console.log(counter()); // 2




// // // 20. Write a function that returns another function which adds a specific number to its argument.
// function addNumbers(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// const add5 = addNumbers(5);
// console.log(add5(20));

