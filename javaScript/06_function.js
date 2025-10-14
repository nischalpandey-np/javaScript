
// FUNCTIONS IN JAVASCRIPT

// WHAT IS A FUNCTION?
// A function is a block of code that performs a specific task.
// You can define it once and use it multiple times.
// Functions help make code reusable, organized, and readable.
// DRY = Don't Repeat Yourself.


// FUNCTION DECLARATION

function greet(name) {
  console.log(`Hello, ${name}!`)
}
// greet('Boss') // Output: Hello, Boss!


// FUNCTION WITH RETURN VALUE

function add(a, b) {
  return a + b
}
let sum = add(5, 7)
console.log(`Sum is: ${sum}`) // Output: Sum is: 12


// FUNCTION EXPRESSIONS (Anonymous Functions)

// Functions can also be stored in variables.
const multiply = function (x, y) {
  return x * y
}
console.log(`Product: ${multiply(4, 6)}`) // Output: Product: 24


// DEFAULT PARAMETERS

function sayHello(name = 'User') {
  console.log(`Hello, ${name}!`)
}
sayHello() // Output: Hello, User!


// CALLBACK FUNCTIONS

// A callback function is a function passed as an argument
// to another function, and executed later.

function greetUser(name, callback) {
  console.log(`Hi, ${name}`)
  callback()
}

// The callback function
function sayBye() {
  console.log('Goodbye!')
}

// Call the function with a callback
greetUser('Boss', sayBye)

// Another example: asynchronous callback using setTimeout
setTimeout(function () {
  console.log('This runs after 2 seconds')
}, 2000)
