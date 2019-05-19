//If statements and comparisons

// Used to evaluate some kind of a condition and then to do whatever it is set to do depending on a condition 

// if(something is true){
//     do something here
// } else {
//     do something else
// }

const id = 200

// // Comparisons

// // EQUAL 

// if(id == 200){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// //NOT EQUAL TO

// if(id != 200){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// //Test the value and the type with ===

// // EQUAL 

// if(id === 200){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// //NOT EQUAL
// if(id !== 200){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

// if(typeof id !== 'undefined'){
//     console.log(`The id is ${id}`)
// } else {
//     console.log('No id')
// }

// GREATER OR LESS THAN
// if(id >= 200){
//     console.log('correct')
// } else {
//     console.log('incorrect')
// }

//IF ELSE

const color = 'yellow'

// if(color === 'red'){
//     console.log('Color is red')
// } else if (color === 'blue'){
//     console.log('Color is blue')
// } else {
//     console.log('Color is not red or blue')
// }


// LOGICAL OPERATORS

// AND &&

const name = 'Stephen'
const age = 24

if (age > 0 && age < 12) {
    console.log(`${name} is a child`)    
} else if (age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is and adult`)
}

// OR ||

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`)
} else {
    console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR - easier way to write an if statement

console.log(id === 100 ? 'Correct' : 'Incorrect')







