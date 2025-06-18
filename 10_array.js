// ARRAY: we can store multiple elements/values in a single variable, it can be any data type, number,string,boolean,array,object. [], indexing will starts from 0

// students:- data store - name,id,class,contact,subject, progLang[]

// let books = ["C++", "Data_Structure", "Java", "Javascript"];
// console.log(books)
// length(total no of elements) - 4
// java indexing - 2
// console.log(books[0])
// console.log(books[3])
// last element - [length - 1] // 4 - 1

// array methods:
// books.push("Python")   // data insert in last index
// books.pop() // data delete from last index
// books.pop()
// books.unshift("Python")   // insert in 0th index
// books.shift(); // delete from 0th index
// books.splice(2, 1); // indexing,no of element(s)     // delete elm from any index
// books.splice(2, 0, "Python"); // indexing,0,"Elm" //  add elm in any index
// books.splice(2, 1, "Python"); // indexing,1,"updated_elm" // update value
// console.log(books)

// let books = ["C++", "Data_Structure", "Java", "Javascript", ["Basic_JS", "Adv_JS"]];
// // accessing nested array element - [indexingOfNestedArray][indexingOfNestedArrayElement]
// // console.log(books[4][0])
// books[4].splice(0, 1);
// console.log(books)


// let arr1 = [1, 2, 3, 4, 5]
// let res = [];
// // [2,4,6,8,10]
// // [1,4,9,16,25]
// for (let itr = 0; itr < arr1.length; itr++) {
//     res.push(arr1[itr] ** 2)
// }
// console.log(res)

// let arr2 = [5, 20, 4, 17, 19, 30, 24, 80, 35, 44]
// [20,4,30,24,80,44]

// let evenNum = [];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//         evenNum.push(arr2[i])
//     }
// }
// console.log(evenNum)

// access last element using length
// let arrLength = arr2[arr2.length - 1]; // arr2[9]
// console.log(arr2[9])
// console.log(arrLength)

// split(),join(),concat()

// Concat(): to merge/concat/copy two or more array, we have to take another variable, combines two or more arrays. This method returns a new array without modifying any existing arrays.

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let arr3 = [10, 20, 30, 40]
// let concatArr = arr2.concat(arr1, arr3)
// console.log(concatArr)

// join(): array to string,

// let books = ["C++", "Data_Structure", "Java", "Javascript"];
// // console.log(books)
// let arrToStr = books.join(", ")
// console.log(arrToStr)

// split(): string to array
// let language = "Javascript"
// // let strToArr = language.split(" "); // ['Javascript']
// let strToArr = language.split("");; // ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
// console.log(strToArr)


// map(),reduce(),filter(),indexOf(), find(),..... - ES6