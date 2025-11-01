// Arrow functions, also known as fat arrow functions , are a consise and shorter way to define functions in js. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions.

// Traditional function
function greet(user) {
  return `Hello ${user}`
}

console.log(greet('Nischal'))

// Arrow function
const variable =( parameter) => {
  return parameter ;
}
console.log(variable("argument"));

// Arrow function with a return
const multiply = (num1,num2 )=> {
return num1 * num2;
}
console.log(multiply(3,4))
