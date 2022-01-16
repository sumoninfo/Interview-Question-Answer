/*
let user = {
    name: {
        first: 'john',
        last: 'smith'
    },
    age: 18,
    city: 'new york'
}

const age = 20;

user = {...user, age}

console.log(user.age)
// output: 20


const newData ={
    age: 22,
    city: 'san francisco'
};

user = {...user,...newData}

console.log(user.name.first)
// output: john
console.log(user.age)
// output: 22
console.log(user.city)
// output: 'san francisco'


let skillet = {
    person: {
        name    : {
            first: '',
            last : ''
        },
        age     : {
            current: ''
        },
        birthday: {
            day  : '',
            month: '',
            year : ''
        }
    }
};

let update = {
    person: {
        name: {
            first: 'blah',
            last : 'ha'
        }
    }
};

let result = Object.assign(skillet.person, update.person);

console.log(result);
//========remove a property from a JavaScript object========
const car = {
    color: 'blue',
    brand: 'Ford'
}
console.log(car)
// delete car.color
delete car['brand']

// delete car.brand
// delete newCar['brand']
console.log(car)


var myObject = {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};

delete myObject.method;

console.log(myObject); // logs: undefined

const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a, 'a')
console.log(rest, 'rest')
*/
const myObject = {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};
const { method, ...newObject } = myObject;
console.log(newObject);
console.log(method);