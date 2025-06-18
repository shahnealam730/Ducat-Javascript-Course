// OBJECT:An Object in js is a collection of key-value pairs used to store and organize data. keys are called properties, and values can be anything - number, string,boolean,array,object. {}


// let user = {
//     // key : value,
//     fullName: "John Doe",
//     age: 25,
//     programming_languages: ["C++", "Java", "Python", "Javascript"],
//     "email id": "john@email.com",
//     // nested object
//     address: {
//         city: "Noida",
//         country: "India",
//         pincode: 201301
//     }
// }
// console.log(user)
// access object's property: . notation , [] bracket notation
// console.log(user.fullName)
// console.log(user["email id"])
// access nested object's property
// console.log(user.address.city)
// // insert data in Object
// user.is_student = true;
// console.log(user)

// user.address.state = "U.P";
// console.log(user)

// user.age = 26;
// console.log(user.age)


// delete user.age;
// console.log(user)

// Write a JavaScript program to list the properties of a JavaScript object. Sample object: keys
// Write a JavaScript program to list the values of a JavaScript object. Sample object: values
// Write a JavaScript program to delete the rollno property from the following object.  Also print the object before or after deleting the property.
// Write a JavaScript program to get the length of a JavaScript object. // keys.length
// var student =
//     { name: "David Rayy", sclass: "VI", rollno: 12 };

// console.log(Object.keys(student))
// console.log(Object.keys(student).length)

// let student =
// {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12,
//     // greet1: function () { // before ES6
//     //     console.log("Helloo, User")
//     // },

//     greet() {
//         console.log("My name is " + this.name + ", i have ordered " + orderDetails.quantity + orderDetails.item)
//     }
// };
// // student.greet()
// // My name is David Rayy, i have ordered 10 Project_Copies


// let orderDetails = {
//     order_id: "123AB",
//     item: "Project_Copies",
//     quantity: 10
// }
// student.greet()

// const car = {
//     brand: "Toyota",
//     speed: 120,
//     start: function () {
//         console.log("Car Started")
//     },
//     stop() {
//         console.log("Car Stopped")
//     }
// }
// car.stop()

// Object using new keyword - TS

// let user = new Object()
// user.name = "David Rayy"
// console.log(user)

// Object using constructor function: class,instance - TS
// Object Constructor function: FunctionName - to create/define object's property

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let newPerson = new Person("John Doe", 24)
// console.log(newPerson)

// for in - get properties from an object
// for each - in array



var student =
    { name: "David Rayy", sclass: "VI", rollno: 12 };

// for (let key in student) {
//     console.log(key + ":" + student[key])
// }

// .keys() -> forEach()

Object.entries(student).forEach(function ([key, value]) {
    console.log(key + ":" + value)
})

// callback function: function inside arguements
// function () {
// console.log() -> callback function of forEach
