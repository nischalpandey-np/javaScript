const prompt =require("prompt-sync")()

const add = (num1,num2) => {
    return num1+num2
}
const subtract = (num1,num2) => {
    return num1-num2
}
const  multiply = (num1,num2) => {
    return num1*num2
}
const  divide = (num1,num2) => {
    return num1/num2
}

let run = true
let result

while (run){
    const number1=parseFloat(prompt("Enter num1: "))
    const number2=parseFloat(prompt("Enter num2: "))
    let operator = prompt("Choose operator (+,-,*,/): ")
    let new_operator = operator.toLowerCase()
if(new_operator=='+' ||new_operator== 'add')
    result = add(number1,number2)

else if(new_operator=='-' ||new_operator== 'subtract')
     result = subtract(number1,number2)
else if(new_operator=='*' ||new_operator== 'multiply')
     result = multiply(number1,number2)
else if(new_operator=='/' ||new_operator== 'divide')
    if (number2==0){
        result =   `Error: division by zero`
        console.log(result)
        continue}
    else
     result = divide(number1,number2)
else{
   result = 'Invalid operator' 
}


    console.log(`Result of ${number1} ${new_operator} ${number2} = ${result}`)
    let again = prompt("Press 'y' to continue: ")
    if(again.toLowerCase() !== 'y'){
        run=false
    }
}
console.log('calculator closed: ')