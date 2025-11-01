// The ternary operator in Javascript is a concise way of writing conditional expressions.

// condition ? exprIfTrue : exprIfFalse

// Example 1

let password = 8
function passCheck(pass) {
  // if (pass == 8) {
  //   return 'Strong password'
  // } else {
  //   return 'Password should be 8 characters'
  // }
  return pass == 8 ? 'Strong password' : 'Password should be 8 characters. '
}

const res = passCheck(password)
console.log(res)



// Example 2

const age = 23
const isAdult = age >= 18 ? ' Adult' : 'Not adult'
console.log(isAdult)
