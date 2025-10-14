// Arrays are 0 index based
let fruits = ['apple', 'banana', 'mango']

// Empty array (well, kinda — it's got numbers)
const emptyArray = []
// console.log('Empty Array:', emptyArray)

// Accessing Items from our array
// console.log('First Fruit:', fruits[0]) // apple
// console.log('Second Fruit:', fruits[1]) // banana
// console.log('Third Fruit:', fruits[2]) // mango

// Nested Array (a.k.a. two-dimensional array)
const nestArr = ['one', ['Nested_two', ['double_nested'], 'Nested_three'], 'four', false, 12]
// console.log('Nested Array:', nestArr)
// console.log('Access double_nested:', nestArr[1][1][0]) // double_nested

// String as an Array
const myLetter = ['h', 'e', 'l', 'l', 'o']
// console.log('My Letters:', myLetter)
// console.log('Joined Word:', myLetter.join('')) // hello

// ---------------------- ARRAY METHODS ----------------------

// push() -> adds item at the end
fruits.push('grapes')
// console.log('After push:', fruits)

// pop() -> removes last item
fruits.pop()
// console.log('After pop:', fruits)

// unshift() -> adds item at the start
fruits.unshift('strawberry')
// console.log('After unshift:', fruits)

// shift() -> removes first item
fruits.shift()
// console.log('After shift:', fruits)

// length -> number of items
// console.log('Array length:', fruits.length)

// indexOf() -> find index of item
// console.log('Index of mango:', fruits.indexOf('mango'))

// includes() -> check if item exists
// console.log('Has apple?', fruits.includes('apple'))

// slice() -> copy part of array
const sliced = fruits.slice(0, 2)
// console.log('Sliced Array:', sliced)

// splice() -> add/remove elements in place
fruits.splice(1, 1, 'pear') // remove 1 at index 1, add 'pear'
// console.log('After splice:', fruits)

// concat() -> merge arrays
const moreFruits = ['kiwi', 'pineapple']
const allFruits = fruits.concat(moreFruits)
// console.log('All Fruits:', allFruits)

// join() -> join elements into a string
// console.log('Joined Fruits:', allFruits.join(', '))

// reverse() -> reverse the array
// console.log('Reversed:', allFruits.reverse())

// sort() -> alphabetically sort (warning: it mutates the array)
// console.log('Sorted:', allFruits.sort())

