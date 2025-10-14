//Function

// WHAT IS A FUNCTION?
// A function is a block of code that performs a specific task.
// You can define it once and use it multiple times.
// Functions help make code reusable, organized, and readable.
// DRY = Don't Repeat Yourself.


// FUNCTION DECLARATION
function greet(name) {
  console.log('Hello, ' + name + '!')
}
greet('Boss')


//  FUNCTION WITH RETURN VALUE
function add(a, b) {
  return a + b
}
let sum = add(5, 7)
console.log('Sum is:', sum) // Output: Sum is: 12


//  FUNCTION EXPRESSIONS
// Functions can also be stored in variables.
const multiply = function (x, y) {
  return x * y
}
console.log('Product:', multiply(4, 6)) // Output: Product: 24


//  DEFAULT PARAMETERS
function sayHello(name = 'User') {
  console.log('Hi ' + name + '!')
}
sayHello() // Output: Hi User!
