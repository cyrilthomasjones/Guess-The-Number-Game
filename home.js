// console.log('hello');

// alert('Hello this is from cyril ') 

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
// console.log(num1);

// Divide, multiply *, remainder %
// console.log(num1 % 5);
// console.log(num1 / 6);

// Increment/decrement by 10
num1 += 10;
// console.log(num1);

/* Functions
1. Create a function
2. Call  the function
*/

// Create 
function fun() {
    // alert('this is a function');
    // console.log('this is a function');
}

// Call
fun();

/* Let's take create a function that take in a name and
says hello followed by your name. 

For example

Name: "Qazi"
Return: "Hello Qazi"

*/

// function greeting(yourName){
//     var result = 'Hello' + ' ' + yourName; //String concantenation 
//     console.log(result);
// }

// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in function?
// How do we add 2 numbers together in a function

// function sumNumbers(num1, num2){
//     var result = num1 + num2;
//     console.log(num1 + num2);
// }

// sumNumbers(10, 10); // You can also add strings too. All it is sayiing is that you are adding two things together 

// While loops
var num = 0;
// while(num < 100){
//     num += 1; // If this code is not included, the loop will run infinitely
//     console.log(num);
// }

// For Loop. Note you can use let or var

// for (let num = 0; num <= 100; num++){
//     console.log(num);
// }

// Data types 
// let yourAge = 18; // number 
// let yourName = 'Bob'; // string 
// let name = {first: 'jane', last: 'Doe'}; // Object 
// let truth = false; // boolean
// let groceries = ['apple', 'banana', 'oranges']; // Array
// let random; // undefined
// let nothing = null; // value null

// String in Javascript (common methods)
// let fruit = "banana,Apples";
// let moreFruits = 'banana\napple';

// console.log(fruit.length);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(2,6)); // Works almost like substring 
// console.log(fruit.replace('ban','123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);  // This is the same as charAt function
// console.log(fruit.split(',')); // split by a comma
// console.log(fruit.split('')) // Default split by characters */

// Array
let fruits = ['banana', 'applesss', 'orannge', 'pineapples'];
// fruits = ['banana', 'applesss', 'orannge', 'pineapples'];
let fruitsNewArray = ['banana', 'applesss', 'orannge', 'pineapples'];
// alert(fruits[1]);

// console.log(fruits[2]);
//  console.log(fruitsNewArray[2])

// Fruits[0] = 'peer';
// console.log(fruits);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// array common methods
// console.log('', fruits.toString());

// console.log(fruits.join('_*_'));
// console.log(fruits.pop(), fruits); // pop off / remove the last item.
// console.log(fruits.push('blackberries')); // Appends items to the last
// console.log(fruits.push('grapes'), fruits); // Appends items to the last and then print
// console.log(fruits[4]); // Undefined
// fruits[fruits.length] = "new fruit"; // same as push
//  console.log(fruits);
//  fruits.shift() // remove first element from an array
//  console.log(fruits);
// fruits.unshift("kiwi") // add first element to an array
// console.log(fruits);

let vegetables = ['asperagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combine arrays  
// console.log(allGroceries);
// console.log(allGroceries.slice(1,4)); // substring an array, note the last index(4) element is not included. 
// console.log(allGroceries.reverse())

// console.log(allGroceries.sort()); // sort in Aphabetical order
let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2]; 
console.log(someNumbers.sort(function(a,b){return a-b})); // To sort numbers you have to pass it a filter. Sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a})) // To sort numbers you have to pass it a filter. Sorted in descending order

let emptyArray = new Array();

for (let num = 0; num <= 10; num++){
    emptyArray.push(num);
}

console.log(emptyArray);


























































































