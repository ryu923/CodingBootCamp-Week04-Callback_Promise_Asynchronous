// Week04 - Lecture2: Asynchronicity

// 1. Slide 04~05: Basic Asynchronous Example
setTimeout(() => {
    console.log('Goodbye.');
}, 2000); // Display output 'Goodbye' after 2 secconds

// 2. Asynchronous Callbacks
// 2-1. Asynchronous Callbacks: Practice 1
const runDelayed = (callback) => {
    setTimeout(() => {
        callback();
    }, 2000);
};

const sayGoodbye = () => console.log('Goodbye.');

runDelayed(sayGoodbye);
console.log('Hello!');
// Display 'Hello!' at first, and then 'Goodbye.' after 2 seconds

// 2-2. Asynchronous Callbacks: Practice 2
const getData = (callback) => {
    setTimeout(() => {
        const names = ['Fester', 'Geralph', 'Hegrin'];
        callback(names);
    }, 2000);
};

const printNames = names => {
    names.forEach(name => console.log(name));
};

getData(printNames);
// Display 'Fester', 'Geralph', 'Hegrin' after 2 seconds


// 3. Asynchronous Promises
fetch('http://webservices.nextbus.com/service/publicJSONFeed?command=agencyList')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);    
    });

console.log('Here comes the data…');