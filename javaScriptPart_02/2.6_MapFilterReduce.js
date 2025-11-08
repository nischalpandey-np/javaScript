// Map method
// .map() = accepts a callback and applies that function to each element of an array, then returns a new array

const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(square)
console.log(squares) // [1, 4, 9, 16, 25]

function square(element) {
  return Math.pow(element, 2)
}

function cube(element) {
  return Math.pow(element, 3)
}

const cubes = numbers.map(cube)
console.log(cubes) // [1, 8, 27, 64, 125]

// --------------------------------------------------
// Filter method
// .filter() = creates a new array with all elements
// that pass the test implemented by the provided function

function isEven(element) {
  return element % 2 === 0
}

const evens = numbers.filter(isEven)
console.log(evens) // [2, 4]

// Example 2: filter odd numbers using arrow function
const odds = numbers.filter((num) => num % 2 !== 0)
console.log(odds) // [1, 3, 5]

// --------------------------------------------------
// Reduce method
// .reduce() = reduces the array to a single value by applying
// a callback function that accumulates the result

function sum(accumulator, currentValue) {
  return accumulator + currentValue
}

const total = numbers.reduce(sum, 0)
console.log(total) // 15

// Example 2: find product of all elements
const product = numbers.reduce((acc, num) => acc * num, 1)
console.log(product) // 120
