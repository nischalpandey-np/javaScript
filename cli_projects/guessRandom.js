const prompt = require('prompt-sync')()

let run = true;

let random_number =Math.random()
let dice = Math.floor(random_number * 20)+1
var count =0;

while (run){
count ++;
let user_input = parseInt(prompt ("Guess the number: "))


if(user_input==dice){
  console.log("Yay you won: ")
   console.log(`Total try=${count}`)
  if (count <= 3){
    console.log('You earned ***')
  }
  else if (count <=6){
    console.log('You earned **')
  }
  else{
    console.log('You earned *')
  }
  break

}
else if (user_input > dice){
   console.log("your guess too high")
   console.log(`Attempted =${count} times`)}
else{
  console.log("not quite, try again!! ")
  console.log('your guess too low')

  console.log(`Attempted =${count} times`)
}
let again = prompt("Do you want to try again (y/n) : ")
  if (again.toLowerCase() !=='y')
  run= false;
}

