// Built in constructors
// String

const name1 = 'Gjuro'
const name2 = new String('Gjuro')


console.log('name2', name2)

console.log('typeof name1', typeof name1)

if (name2 === 'Gjuro') {
    console.log('YES')
} else {
    console.log('NO')
}

//Numbers
const num1 = 5
const num2 = new Number(5)

console.log('num2', typeof num2)

// Boolean
const bool1 = true
const bool2 = new Boolean(true)

// Function 
const getSum1 = function(x,y){
    return x + y
}
console.log(getSum1(1, 5))
