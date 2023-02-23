const firstName = Symbol('Poonam')
const fname = Symbol('Poonam')

console.log(firstName===fname) //false

//to access the value of symbol
const lastName = Symbol('roy')
console.log(lastName.description)

//to check its type
const greet = Symbol('Hello')
console.log(typeof(greet))