// The "for...in" loop in JavaScript is used to iterate over
// the enumerable properties (keys) of an object.

// Example 1: Using for...in with an object
const person = {
  name: 'Nischal',
  age: 19,
  gender: 'male',
}

for (let key in person) {
  console.log(key, person[key])
}

// Example 2: Using for...in with an array (not usually recommended)
const newList = ['one', 'two', 'three']

for (let index in newList) {
  console.log(`${index}. ${newList[index]}`)
}

