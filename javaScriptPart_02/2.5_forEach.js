// forEach() example in JavaScript
// forEach() = method used to iterate over the elements of an array and apply a specified function to each Element.

// Syntax: array.forEach(callback(currentValue, index, array))

const fruits = ['apple', 'banana', 'cherry']

// Using forEach() to loop through each fruit
fruits.forEach(function (fruit, index) {
  // 'fruit' is the current element
  // 'index' is the position of the element in the array
  console.log(index, fruit) // Prints the index and the fruit name
})

// ------------------------------------------------------
// Example 1: Basic use — logging each element
// ------------------------------------------------------
const numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
  console.log(num); // Prints 1, 2, 3, 4
});


// Example 2: Using arrow function

const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(`Color ${index + 1}: ${color}`);
});
// Output:
// Color 1: red
// Color 2: green
// Color 3: blue


// Example 3: Accessing the array inside forEach()

const new_fruits = ["apple", "banana", "cherry"];

new_fruits.forEach(function(fruit, index, array) {
  console.log(`At index ${index}, ${fruit} is in [${array}]`);
});


// Example 4: Modifying external variables (side effects)

let total = 0;
const prices = [10, 20, 30];

prices.forEach(price => {
  total += price; // Summing values
});

console.log("Total:", total); // Output: Total: 60


// Example 5: forEach() on an array of objects

const users = [
  { name: "Ava", age: 21 },
  { name: "Ben", age: 25 },
  { name: "Clara", age: 19 }
];

users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});
// Output:
// Ava is 21 years old
// Ben is 25 years old
// Clara is 19 years old


// Example 6: Using thisArg (rarely used, but possible)

const team = {
  prefix: "Player",
};

const playerNumbers = [7, 10, 23];

playerNumbers.forEach(function(num) {
  console.log(`${this.prefix} ${num}`);
}, team);
// Output:
// Player 7
// Player 10
// Player 23


// Example 7: Empty array = no execution

[].forEach(() => {
  console.log("You’ll never see this.");
});


// NOTES:
// - If you need a new array, use .map()
// - If you need to filter, use .filter()
