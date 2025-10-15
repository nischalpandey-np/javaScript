// Objects

const newObject = {
  firstName : "Nischal",
  lastName : "Pandey",
  isProgrammer : true ,
  age: 18,
  location : ['Planet',"Earth"]
};

// Adding new elements to object
newObject.status = 'Student'

// Accessing Items from our object
console.log(newObject.lastName)
console.log(newObject["firstName"])
console.log(newObject.status)

// Delete elements from object
delete newObject.location;

// Object Methods
// Methods is a function inside a object

const person ={
  name : " Nischal",
  age  : 19,
  greet : function (){
    return `hello my name is ${person.name} & I am ${person.age} years old.`
  }
}

console.log(person.greet())
