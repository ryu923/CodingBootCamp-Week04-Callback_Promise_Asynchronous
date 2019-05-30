// Week04 - Lecture 1: Callback and Promises

// 1. Slide 02~04: Review
const myName = 'Tim';

const names = ['Albert', 'Bertha', 'Conway'];

const greetName = name => {
    console.log('Hello, ' + name + '!');
}

// Call greetName(myName);
greetName(myName); // OUPUT: Hello, Tim!
// Call greetName(name);
greetName(name); // OUTPUT: Hello, Albert,Bertha,Conway!


// 2-1. Slide 05~06: Functions as Arguments
const greet = () => {
    console.log('Yo.');
}

const runFunction = f => {
    f();
}

// Call runFunction(greet);
runFunction(greet); // OUPUT: Yo.

// 2-2. Slide 07~09: Functions as Arguments
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mult = (x, y) => x * y;
const div = (x, y) => x / y;

const doMath = (op, num1, num2) => {
    return op(num1, num2);
}

// Call doMath(add, 2, 3);
doMath(add, 2, 3); // OUPUT: 5
// Call doMath(sub, 10, 1);
doMath(sub, 10, 1); // OUPUT: 9
// Call doMath(mult, 6, 7);
doMath(mult, 6, 7); // OUPUT: 42
// Call doMath(div, 45, 5);
doMath(div, 45, 5); // OUPUT: 9


// 3. Slide 10~27: Common Higher-order Functions; .map(), .forEach(), .filter(), .reduce()
// 3-1. .map() Function: Practice 1
const inc = x => x + 1;

// Call value
console.log(inc(3)); // OUTPUT: 4
// Call Array
[1, 2, 3, 4, 5].map(inc); // OUTPUT: [2, 3, 4, 5, 6]

// Call length of string value
'Tim'.length; // OUTPUT: 3
// Call lengths of string values in array using .map() function
['Anabelle', 'Burt', 'Chantelle'].map(name => name.length); // OUTPUT: [8, 4, 9]

// 3-1. .map() Function: Practice 2
const signum = n => {
    if(n > 0) {
        return 1;
    }
    else if(n < 0) {
        return -1;
    }
    else {
        return 0;
    }
}

// Call value
console.log(signum(4)); // OUTPUT: 1
// Call array using .map() function
[3, 0, -9, 5, 0, -1].map(signum); // OUPUT: [1, 0, -1, 1, 0, -1]

// 3-2. .forEach() Function
const names = ['Albert', 'Bertha', 'Conway'];

const greetName = name => {
    console.log('Hello, ' + name + '!');
}

// Call names array using .forEach() function
names.forEach(greetName);
// OUTPUT:
// Hello, Albert!
// Hello, Bertha!
// Hello, Conway!

// 3-3. .filter() function
const even = x => x % 2 === 0;

// Call value
console.log(even(2)); // OUTPUT: true
console.log(even(3)); // OUTPUT: false
// Call array using .filter() function
[1, 2, 3, 4, 5].filter(even); // OUTPUT: [2, 4]
[1, 2, 3, 4, 5].filter(x => !even(x)); // OUPUT: [1, 3, 5]
// ([1, 2, 3, 4, 5].filter(!even); X: false is not a function at Array.filter)
['Dagmar', 'Edgar', 'Fane'].filter(name => name.length > 4); // OUTPUT: ['Dagmar', 'Edgar']
[1, 0, undefined, 'Blakely', true, false, null].filter(x => x); // OUTPUT: [1, 'Blakely', true]

// 3-4. .reduce() function
[1, 2, 3].reduce((acc, x) => acc + x, 0); // OUTPUT: 6


// 4. Slide 24~27: Promises
functionThatReturnsAPromise().then(() => {
    console.log('It is done!');
});

functionThatReturnsAPromise().then(() => {
    return anotherPromise();
}).then(() => {
    console.log('It is done!');
});