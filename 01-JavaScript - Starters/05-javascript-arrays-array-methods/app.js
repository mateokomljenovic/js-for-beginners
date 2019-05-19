//Arrays and array methods

//Create some arrays 

let numbers = [1,2,3,4,5]

let numbers2 = new Array(23, 44, 52, 56, 43, 48)

let fruit = ['apple', 'banana', 'kiwi', 'orange']

let mixed = [77, 'bazooka', new Date(), null]

let result

// Get array length 

result = numbers.length

// Check if is array 

result = Array.isArray(numbers)

// Get single value 

result = numbers[3]
result = numbers[0]

// Insert something into array

numbers[2] = 88

// Find index of a value 

result = numbers.indexOf(88)

// // ARRAY MUTATION 

// //Add a number to the end 
// result = numbers.push(84)

// //Add a number to the beginning
// result = numbers.unshift(11)

// //Remove from end
// result = numbers.pop()

// //Remove from the beginning
// result = numbers.shift()

// // Splicing values
// result = numbers.splice(1, 1)

// // Reversing the array
// numbers.reverse()

// // Concatenate arrays

// result = numbers.concat(numbers2)

// //Sorting arrays

// result = fruit.sort()

// Using the compare function

// result = numbers.sort((a, b) =>{
//     return a - b
// })

// // Reverse sort 

// result = numbers.sort((a, b) => {
//     return b - a
// })

// Find 
function over50(num){
    return num > 50
}

result = numbers.find(over50)



console.log('numbers :', numbers);
console.log('result', result)
