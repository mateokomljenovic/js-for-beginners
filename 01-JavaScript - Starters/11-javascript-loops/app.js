// Loops

// Instruction that repeats until the specific instruction is reached 

//FOR LOOP - WHEN YOU KNOW HOW MANY ITERATIONS YOU WILL HAVE

// for (let i = 0; i < 10; i++) {
//     // console.log('Number ' + i)
    
// }

// // BREAKING THE LOOP AND CONTINUING THE ITERATION

// for (let i = 0; i < 10; i++) {
//     if(i === 2){
//         console.log('2 is my favourite number')
//         continue
//     }
//     // BREAKING THE LOOP FOR GOOD
//     if(i === 5){
//         console.log('Stop the loop')
//         break
//     }

//     console.log('Number ' + i)
// }

//WHILE LOOP

// let i = 0 

// while (i < 10) {
//     console.log('Number ' + i)
//     i++
// }

// DO WHILE - It will always run at least once

// let i = 0 

// do {
//     console.log('Number' + 1)
//     i++
    
// } while (i < 10);


// LOOPS IN ARRAY 

const cars = ['Ford', 'Volvo', 'Toyota']

// for (let i = 0; i < cars.length; i++) {
//     console.log('cars[i]', cars[i])
    
// }

// FOR EACH - ALWAYS USE IF YOU'RE TRYING TO LOOP THROUGH AN ARRAY

// cars.forEach((car)=>{
//     console.log('car', car)
// })

// // MAP - used to return a different array

// const users = [
//     {id: 1, name: 'Mark'},
//     {id: 2, name: 'Ivan'},
//     {id: 3, name: 'Lisa'},
//     {id: 4, name: 'Steven'}
// ]

// const ids = users.map((user) => {
//     return user.id
// })
// console.log('ids :', ids);

//FOR IN

const user = {
    firstName: 'Mike',
    lastName: 'Myers',
    age: 50
}

//Gives us just a key

for (let x in user){
    console.log(`${x}: ${user[x]}`)
}



