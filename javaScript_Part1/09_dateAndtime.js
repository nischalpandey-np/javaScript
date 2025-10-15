// Date and time
// year , month , days,hours,minutes,seconds,miliseconds

const currentDate = new Date()
console.log(currentDate)

const new_date = new Date()
const year = new_date.getFullYear()
const month = new_date.getMonth() + 1 // add 1 because months are 0-indexed
const day = new_date.getDate() // day of the month
const hours = new_date.getHours()
const minutes = new_date.getMinutes()
const seconds = new_date.getSeconds()
const milliseconds = new_date.getMilliseconds()

console.log('Year:', year)
console.log('Month:', month)
console.log('Day:', day)
console.log('Hours:', hours)
console.log('Minutes:', minutes)
console.log('Seconds:', seconds)
console.log('Milliseconds:', milliseconds)


// Set Interval and Set Timeout

const intervalid = setInterval(() => {
  console.log('This runs every  seconds')
}, 1000)

// Stop the interval
setTimeout(() => {
  clearInterval(intervalid);
  console.log("Interval stopped")
}, 10000);

setTimeout(() => {
  console.log('This runs after 10 seconds')
}, 10000)
