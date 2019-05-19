// DOM Selectors for Single Elements

//Get Element by ID

console.log(document.getElementById('main'))
// console.log(document.getElementById('main').id)
// console.log(document.getElementById('main').className)

const main = document.getElementById('main')

//Styling 

document.getElementById('main').style.background='#333'
document.getElementById('main').style.color='yellow'
document.getElementById('main').style.padding='5px'

// If you want to make something gone after clicking the button
// document.getElementById('main').style.display='none'

//Change content 
document.getElementById('main').textContent='Main Header'

//Inner Text
document.getElementById('main').innerText = 'My tasks'

//Inserting an HTML tag

document.getElementById('main').innerHTML = '<span style="color: red">Task List</span>'

// Working with variables
//Assign the variable 

//const main = document.getElementById('main')

main.textContent = 'Main Header'
main.innerText = 'Inner Text'
main.innerHTML = '<span style="color: blue">Task List</span>'

// NEW SELECTOR - document.querySelector()

console.log(document.querySelector('#main'))
console.log(document.querySelector('h1'))

//If there is more than one of the same items we are willing to call, it will give us the first one to come 

document.querySelector('li').style.color='red'
document.querySelector('ul li').style.color='blue'

//Using pseudo-classes
document.querySelector('li:last-child').style.color='purple'
document.querySelector('li:nth-child(3)').style.color='green'