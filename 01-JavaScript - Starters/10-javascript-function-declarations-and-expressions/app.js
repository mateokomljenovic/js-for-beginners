// Function declarations and Expressions

// Blocks of code that can be defined and called later, or can be defined and called at the moment 

// Few types of functions
// FUNCTION DECLARATIONS

function greet(firstName, lastName){
    //function scope
    //console.log('Hello')
    return 'Hello' + ' ' + firstName + ' ' + lastName
}

// console.log(greet('Mateo', 'Komljenovic'))

// FUNCTION EXPRESSIONS

//Putting a function as a variable assignment - good for hoisting and closures

const square = function(x){
    return x * x
}

// console.log(square(9))

// IIFE - Immediately invokable function expressions

// Function that you declare and run at the same time 

// (function(name){
//     console.log('Hello' + ' ' + name)
// })('Mateo');


// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo...')
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = (id) => {
    console.log(`Delete todo ${id}`)
}
console.log('todo', todo.add())

