// Date and Time

let result 

const today = new Date()
let birthday = new Date('9-10-1981 11:25:00')
birthday = new Date('September 22 1993')

// Get the month 

result = today.getMonth()
result = today.getDate()
result = today.getDay()
result = today.getFullYear()
result = today.getHours()
result = today.getMinutes()
result = today.getSeconds()
result = today.getMilliseconds()
result = today.getTime()

birthday.setMonth(2)
birthday.setDate(12)
birthday.setFullYear(1964)
birthday.setHours(3)
birthday.setMinutes(42)
birthday.setSeconds(45)

console.log(birthday)