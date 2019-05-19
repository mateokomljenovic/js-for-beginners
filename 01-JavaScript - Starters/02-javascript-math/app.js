const number1 = 100
const number2 = 50
let result

//Simple math with numbers
result = number1 + number2
result = number1 - number2
result = number1 * number2
result = number1 / number2
result = number1 % number2

//Math Object

// Fun methods
result = Math.PI
result = Math.E

//Useful method
result = Math.round(1.89062)

//Comes in handy with Math.round()

result = Math.round(2.2)
// Run up
result = Math.ceil(2.3)
// Run down
result = Math.floor(2.8)
result = Math.sqrt(64)

//Absolute number
result = Math.abs(-5)
// Power
result = Math.pow(8, 2)

// Min - Max

result = Math.min(2, 44, 56, 43, 21, 12)
result = Math.max(2, 44, 56, 43, 21, 12)

// Random - gives you random decimal
result = Math.random()

// Whole number with decimals, between 0 and 99
result = Math.random() * 100
// Whole number with decimals, between 1 and 100 
result = Math.random() * 100 + 1
// Whole number without decimals, between 1 and 100 
result = Math.floor(Math.random() * 100 + 1)

console.log(result)