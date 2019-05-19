//Strings, Concatenation, Properties and Methods

const firstName = 'John'
const lastName = 'Doe'
const age = 25
const string = 'Hello there my name is Mateo'
const tags = ' web design, web development, teacher, full stack developer'

let result 

// String concatenation 1

result = firstName + lastName

// String concatenation 2
result = firstName + ' ' + lastName

// Appending
result = 'Matt '
result += 'Smith'

// Create a sentence with variables

result = 'Hello, my name is ' + firstName + ' and I am ' + age + ' years old'

// Escaping 

result = 'That\'s awesome, I can\'t wait!'

// Methods and properties with strings
// Length property

result = firstName.length

// Concat method
result = firstName.concat(' ', lastName)

// TO UPPERCASE 

result = firstName.toUpperCase()

// to lowercase

result = firstName.toLowerCase()

// Treating strings like read-only arrays 

result = firstName[1] // Taking the 1st index of this value, which is letter o

// Index of value 

result = firstName.indexOf('h')

// Last Index of

result = firstName.lastIndexOf('J')

// Char at 

result = firstName.charAt(2) 

// Get last character 

result = firstName.charAt(firstName.length - 1)

// Substrings

result = firstName.substring(0, 2)

// Slice - mostly used with arrays to pull things from an array

result = firstName.slice(1)
result = firstName.slice(-2)

// Split 

result = string.split( ' ' ) // Splits string and returns an array
result = tags.split(',')

// Replace
result = string.replace('Mateo', 'Jack') // Replaces first name and returns the string with the second name

// Includes - true false
result = string.includes('baz')


console.log(result)