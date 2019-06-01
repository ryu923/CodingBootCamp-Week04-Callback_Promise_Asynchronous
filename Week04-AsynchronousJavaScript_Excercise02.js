// 2. The Node setTimeout() Function
// https://www.codecademy.com/courses/asynchronous-javascript/lessons/promises/exercises/settimeout

console.log("This is the first line code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log("Hello World!");
};

setTimeout(usingSTO, 2000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");