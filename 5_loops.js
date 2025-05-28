// // // // // while (condition) {
// // // // //     // code to be executed repeatedly as long as condition is true
// // // // //     // for example, incrementing a counter
// // // // //     // let i = 0;
// // // // //     // while (i < 5) {
// // // // //     //     console.log(i);
// // // // //     //     i++;
// // // // //     // }
    
// // // // // }


// // // // let value = 10;

// // // // while (value <= 100) {
// // // //     console.log(value);
// // // //     value += 10; // increment value by 10
    
// // // // }


// // // let value = 105;

// // // while (value >= 7) {
// // //     console.log(value);
// // //     value -= 7; // increment value by 7
    
// // // }



// // // let value = 4;
// // // while (value <= 20) {
// // //     if (value % 2 === 0) { // check if value is even
// // //    console.log(value); // print value if it is even
// // //     }
   
// // //     value++; // increment value by 4
// // // }


// // let sum = 0;
// // let num = 10;
// // while (num <= 50) {
// //     if (num % 2 === 0) {
// //         sum += num;
// //     }
// //     num++;
// // }
// // console.log("Sum of even numbers from 10 to 50:", sum);



// let guess = prompt("Guess a number..?");
// let secretNumber = 10;

// while (parseInt(guess) !== secretNumber) {
//     if (parseInt(guess) < secretNumber) {
//         console.log("Too low! Try again.");
//     } else {
//         console.log("Too high! Try again.");
//     }
//     guess = prompt("Guess a number..?");
   
// }
// console.log("Congratulations! You've guessed the secret number:", secretNumber);


let guess = prompt("Guess a number");
const secretNumber = 10;

while (guess != secretNumber) {
    if(guess < secretNumber) {
        alert("Too low! Try again.");
    }else {
        alert("Too high! Try again.");
    }
    guess = prompt("Guess a number");
    
}
alert("Congratulations! You've guessed the secret number:", secretNumber);
