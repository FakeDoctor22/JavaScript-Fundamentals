//  A variable is a container for storing data
//  A variable behave as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2 Assignment (= assignment operator)

let firstName = "Bro"; //strings
let age = 21; //numbers
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age);
console.log("Enrolled", student);

//using string concatenation
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " year old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;