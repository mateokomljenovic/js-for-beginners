// Arrow Functions

// const sayHello = function() {
//     console.log('Hello')
// }

// const sayHello = () => {
//     console.log('Hello')
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello')

// // One line returns, same as above
// const sayHello = () => 'Say Hello'

// // With Object literal we have to wrap it up into parenthesis
// const sayHello = () => ({msg: 'Say Hello'})

// // For multiple params use parenthesis
// const sayHello = name => console.log(`Hello ${name}`)

// sayHello('Mateo')


//Arrow functions as callbacks

const users = ['Nathan', 'John', 'Will']

// const nameLengths = users.map(function(name){
//     return name.length
// })

// // Using an arrow function
// // Shorter
// const nameLengths = users.map((name)=>{
//     return name.length
// })

// Shorters
const nameLengths = users.map(name => name.length)

console.log('nameLengths', nameLengths)
