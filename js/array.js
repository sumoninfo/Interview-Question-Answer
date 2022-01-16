/*const array = [3, 2, 1]

const newFirstElement = 4

const newArray = [newFirstElement].concat(array) // [ 4, 3, 2, 1 ]

console.log(newArray);


const array = [3, 2, 1]

const newLastElement = 0

// Both of these lines are equivalent:
const newArray1 = array.concat(newLastElement) // [ 3, 2, 1, 0 ]
const newArray2 = array.concat([newLastElement]) // [ 3, 2, 1, 0 ]

console.log(newArray1);
console.log(newArray2);

//Pop, Push, Shift and Unshift Array Methods in JavaScript JavaScript gives us four methods to add or remove items from the beginning or end of arrays:

// =============pop() : Remove an item from the end of an array
let cats = ['Bob', 'Willy', 'Mini'];
console.log(cats.pop()) // ['Bob', 'Willy']
//pop() returns the removed item.


// =============push() : Add items to the end of an array
let cats2 = ['Bob'];
cats2.push('Willy'); // ['Bob', 'Willy']
cats2.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']
//push() returns the new array length.


// =============shift() : Remove an item from the beginning of an array
let cats3 = ['Bob', 'Willy', 'Mini'];
console.log(cats3.shift()) // ['Willy', 'Mini']
//shift() returns the removed item.


// =============unshift() : Add items to the beginning of an array
let cats4 = ['Bob'];
console.log(cats4.unshift('Willy')) // ['Willy', 'Bob']

// ================reverse=============
const arr  = [2, 3, 4, 5, 6];
const arr2 = 1;
console.log(arr.reverse())
//[6,5,4,3,2]
console.log(arr.push(arr2))

console.log(arr.reverse()); // [1,2,3,4,5,6]

//=========sorting array value by ASC=========
numbers = [2, 3, 41, 3, 2, 4, 5];

numbers.sort(function (a, b) {
    return a - b
});
console.log(numbers, 'numbers')

//=======odd and even separation in an array of numbers==============
var odd_and_even = [1, 2, 3, 4, 5, 6, 7, 8, 9];
odd_and_even     = odd_and_even.filter(e => e % 2).concat(odd_and_even.filter(e => e % 2 === 0));
console.log(odd_and_even, 'odd_and_even')

var odd_and_even_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

odd_and_even_2.sort((a, b) => b % 2 - a % 2 || a - b);
console.log(odd_and_even_2, 'odd_and_even_2')*/


//===============JavaScript Arrays====================

/*var colors = ["Red", "Green", "Blue"];
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var cities = ["London", "Paris", "New York"];
var person = ["John", "Wick", 32];

var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

document.write(fruits[0]); // Prints: Apple
document.write(fruits[1]); // Prints: Banana
document.write(fruits[2]); // Prints: Mango
document.write(fruits[fruits.length - 1]); // Prints: Papaya


var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
document.write(fruits.length); // Prints: 5

for (let i=0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>"); // Print array element
}
// Iterates over array elements
for(var fruit of fruits) {
    document.write(fruit + "<br>"); // Print array element
}
// Loop through all the elements in the array
for(var i in fruits) {
    document.write(fruits[i] + "<br>");
}

//============Adding New Elements to an Array
var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");

document.write(colors); // Prints: Red,Green,Blue,Yellow
document.write(colors.length); // Prints: 4

//============Adding beginning New Elements to an Array
var colors = ["Red", "Green", "Blue"];
colors.unshift("Yellow");

document.write(colors); // Prints: Yellow,Red,Green,Blue
document.write(colors.length); // Prints: 4

//==========Removing Elements from an Array================
var colors = ["Red", "Green", "Blue"];
var last = colors.pop();

document.write(last); // Prints: Blue
document.write(colors); // Prints: 2

//==========remove the first element from an array using the shift()===========
var colors = ["Red", "Green", "Blue"];
var first = colors.shift();

document.write(first); // Prints: Red
document.write(colors.length); // Prints: 2


//===========Adding or Removing Elements at Any Position=====
var colors = ["Red", "Green", "Blue"];
var removed = colors.splice(0,1); // Remove the first element

console.log(colors); // Prints: Green,Blue
console.log(removed); // Prints: Red (one item array)
console.log(removed.length); // Prints: 1


removed = colors.splice(1, 0, "Pink", "Yellow"); // Insert two items at position one
console.log(colors); // Prints: Green,Pink,Yellow,Blue
console.log(removed); // Empty array
console.log(removed.length); // Prints: 0

removed = colors.splice(1, 1, "Purple", "Voilet"); // Insert two values, remove one
console.log(colors); //Prints: Green,Purple,Voilet,Yellow,Blue
console.log(removed); // Prints: Pink (one item array)
console.log(removed.length); // Prints: 1



//=========Creating a String from an Array============
var colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors.join()); // Prints: Red,Green,Blue
console.log(colors.join("")); // Prints: RedGreenBlue
console.log(colors.join("-")); // Prints: Red-Green-Blue
console.log(colors.join(", ")); // Prints: Red, Green, Blue
*/


//==============Extracting a Portion of an Array=============
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
var subarr = fruits.slice(1, 3);
console.log(subarr); // Prints: Banana,Mango