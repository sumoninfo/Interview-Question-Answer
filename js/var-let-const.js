// ===================CODE 0==========================
/*var aa     = '11';
let bb     = '22';
const user = {
    name: 'Sumon',
    age : 25
};
const name = 'sagor'

console.log(aa)
console.log(bb)

// const object value will be updated but string value not updated
console.log(user.name = 'sakil') */

// ================CODE 1======================
/*// calling x after definition
var x = 5;
document.write(x, "\n");

// calling y after definition
let y = 10;
document.write(y, "\n");

// calling var z before definition will return undefined
document.write(z, "\n");
var z = 2;

// calling let a before definition will give error
document.write(a);
let a = 3;*/

// ====================CODE 2=====================
/*
function colour() {

    setInterval(function() {

        if (document.getElementById('var').style.color == 'black')
            var col1 = 'blue';
        else
            col1 = 'black';

        // setting value of color 1 through var

        if (document.getElementById('let').style.color == 'black') {
            let col2 = 'red';
        } else {
            col2 = 'black';
        }

        // setting value of color 2 through let

        document.getElementById('var').style.color = col1;

        document.getElementById('let').style.color = col2;

        // changing color of h1 in html
    }, 500);
}*/

// ================================Another New================

/*var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: hello is not defined*/

/*
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"*/

/*
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead";
}

console.log(greeter) // "say Hello instead"*/


// ===================Let=============
/*
let greeting = "say Hi";
let times    = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined*/

/*let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"*/

// ===========const-=============
/*const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable.*/

/*
const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared*/


const greeting = {
    message: "say Hi",
    times: 4
}

greeting = {
    message: "Hello",
} // error:  Assignment to constant variable.