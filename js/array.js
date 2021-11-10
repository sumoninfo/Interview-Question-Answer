/*const array = [3, 2, 1]

const newFirstElement = 4

const newArray = [newFirstElement].concat(array) // [ 4, 3, 2, 1 ]

console.log(newArray);*/


/*
const array = [3, 2, 1]

const newLastElement = 0

// Both of these lines are equivalent:
const newArray1 = array.concat(newLastElement) // [ 3, 2, 1, 0 ]
const newArray2 = array.concat([newLastElement]) // [ 3, 2, 1, 0 ]

console.log(newArray1);
console.log(newArray2);*/

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