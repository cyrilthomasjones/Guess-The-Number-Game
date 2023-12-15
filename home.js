console.log('hello');

alert('Hello this is from cyril ') 

// How to write a comment inLine 

// Variable 
var b = 'smoothie';
// console.log(b);

var someNumber = 45;
// console.log(someNumber);

// You can change code on the HTML page using Javascript
document.getElementById('someText').innerHTML = "Hey There!!"

// Get user age
// var age = prompt("What is your age?");

// print out age 
// document.getElementById('someText').innerHTML = age;

// Numbers in Javascript
var num1 = 10;
// console.log(5 * 10);
// console.log(50/5);

// Increment num1 by 1.
num1 = num1 + 1;
num1++;

// Decreement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
// console.log(num1 % 5);
// console.log(num1 / 6);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call  the function
*/

// Create 
function fun() {
    // alert('this is a function');
    console.log('this is a function');
}

// Call
fun();

/* Let's take create a function that take in a name and
says hello followed by your name. 

For example

Name: "Qazi"
Return: "Hello Qazi"

*/

function greeting(yourName){
    var result = 'Hello' + ' ' + yourName; //String concantenation 
    console.log(result);
}

var name = prompt('What is your name?');
greeting(name);

// How do arguments work in function?
// How do we add 2 numbers together in a function

// function sumNumbers(num1, num2){
//     var result = num1 + num2;
//     console.log(num1 + num2);
// }

// sumNumbers(10, 10); // You can also add strings too. All it is sayiing is that you are adding two things together 







































