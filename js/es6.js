/*
//===========The let Keyword===========

// ES6 syntax
for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // undefined


// ES5 syntax
for (var i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
console.log(i); // 5

//==========The const Keyword=============

const PI = 3.14;
console.log(PI); // 3.14
PI = 10; // error

// Changing object property value
const PERSON = {name: "Peter", age: 28};
console.log(PERSON.age); // 28
PERSON.age = 30;
console.log(PERSON.age); // 30

// Changing array element
const COLORS = ["red", "green", "blue"];
console.log(COLORS[0]); // red
COLORS[0] = "yellow";
console.log(COLORS[0]); // yellow


//============The for...of Loop============

// Iterating over array
let letters = ["a", "b", "c", "d", "e", "f"];

for (let letter of letters) {
    console.log(letter); // a,b,c,d,e,f
}

// Iterating over string
let greet = "Hello World!";

for (let character of greet) {
    console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
}


//============Template Literals=============
// Simple multi-line string
let str = `The quick brown fox
    jumps over the lazy dog.`;
console.log(str)

// String with embedded variables and expression
let a      = 10;
let b      = 20;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // The sum of 10 and 20 is 30.

//============Default Values for Function Parameters============
function sayHello(name='World') {
    return `Hello ${name}!`;
}

console.log(sayHello()); // Hello World!
console.log(sayHello('John')); // Hello John!

//===========Arrow Functions==========
// Function Expression
var sum = function(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // 5

// Arrow function
var sum = (a, b) => a + b;
console.log(sum(12, 3)); // 15

// Single parameter, single statement
var greet = name => alert("Hi " + name + "!");
greet("Peter"); // Hi Peter!

// Multiple arguments, single statement
var multiply = (x, y) => x * y;
alert(multiply(2, 3)); // 6


// Single parameter, multiple statements
var test = age => {
    if(age > 18) {
        alert("Adult");
    } else {
        alert("Teenager");
    }
}
test(21); // Adult

// Multiple parameters, multiple statements
var divide = (x, y) => {
    if(y !== 0) {
        return x / y;
    }
}
alert(divide(10, 2)); // 5

// No parameter, single statement
var hello = () => alert('Hello World!');
hello(); // Hello World!


function Person(nickname, country) {
    this.nickname = nickname;
    this.country = country;

    this.getInfo = function() {
        // Outer function context (Person object)
        return function() {
            // Inner function context (Global object 'Window')
            alert(this.constructor.name); // Window
            alert("Hi, I'm " + this.nickname + " from " + this.country);
        };
    }
}

var p = new Person('Rick', 'Argentina');
var printInfo = p.getInfo();
printInfo(); // Hi, I'm undefined from undefined


function Person(nickname, country) {
    this.nickname = nickname;
    this.country = country;

    this.getInfo = function() {
        // Outer function context (Person object)
        return () => {
            // Inner function context (Person object)
            alert(this.constructor.name); // Person
            alert(`Hi, I'm ${this.nickname} from ${this.country}`);
        };
    }
}

let p = new Person('Rick', 'Argentina');
let printInfo = p.getInfo();
printInfo(); // Hi, I'm Rick from Argentina

//=============Classes============
class Rectangle {
    // Class constructor
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    // Class method
    getArea() {
        return this.length * this.width;
    }
}

// Square class inherits from the Rectangle class
class Square extends Rectangle {
    // Child class constructor
    constructor(length) {
        // Call parent's constructor
        super(length, length);
    }

    // Child class method
    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

let rectangle = new Rectangle(5, 10);
alert(rectangle.getArea()); // 50

let square = new Square(5);
alert(square.getArea()); // 25
alert(square.getPerimeter()); // 20

alert(square instanceof Square); // true
alert(square instanceof Rectangle); // true
alert(rectangle instanceof Square); // false

//===========Modules==========
let greet = "Hello World!";
const PI = 3.14;

function multiplyNumbers(a, b) {
    return a * b;
}

// Exporting variables and functions
export { greet, PI, multiplyNumbers };

import { greet, PI, multiplyNumbers } from './main.js';

alert(greet); // Hello World!
alert(PI); // 3.14
alert(multiplyNumbers(6, 15)); // 90


//==========The Rest Parameters============
function sortNames(...names) {
    return names.sort();
}

console.log(sortNames("Sarah", "Harry", "Peter")); // Harry,Peter,Sarah
console.log(sortNames("Tony", "Ben", "Rick", "Jos")); // John,Jos,Rick,Tony

function myFunction(a, b, ...args) {
    return args;
}

console.log(myFunction(1, 2, 3, 4, 5)); // 3,4,5
console.log(myFunction(-7, 5, 0, -2, 4.5, 1, 3)); // 0,-2,4.5,1,3


//============The Spread Operator=============
function addNumbers(a, b, c) {
    return a + b + c;
}

let numbers = [5, 12, 8];

// ES5 way of passing array as an argument of a function
console.log(addNumbers.apply(null, numbers)); // 25

// ES6 spread operator
console.log(addNumbers(...numbers)); // 25

let pets = ["Cat", "Dog", "Parrot"];
let bugs = ["Ant", "Bee"];

// Creating an array by inserting elements from other arrays
let animals = [...pets, "Tiger", "Wolf", "Zebra", ...bugs];

console.log(animals); // Cat,Dog,Parrot,Tiger,Wolf,Zebra,Ant,Bee*/

//==========Destructuring Assignment================
// ES5 syntax
var fruits = ["Apple", "Banana"];

var a = fruits[0];
var b = fruits[1];
console.log(a); // Apple
console.log(b); // Banana


// ES6 syntax
let fruits2 = ["Apple", "Banana"];

let [a2, b2] = fruits2; // Array destructuring assignment

console.log(a2); // Apple