// DOM multiple selectors


//get.ElementsByClassName



// const items = document.getElementsByClassName('item')
// console.log('items', items)

// console.log('items[i]', items[0])

// items[0].style.color='red'

// items[3].textContent = 'Last'

// const listItems = document.querySelector('ul').getElementsByClassName('item')

// console.log('listItems', listItems)



// //getElementsByTagName

// let lis = document.getElementsByTagName('li')

// console.log('lis', lis)
// console.log('lis[i]', lis[3])
// lis[2].style.color = 'red'

// // Convert HTML Collection into array

// lis = Array.from(lis)
// lis.reverse()
// console.log('lis', lis)


//document.querySelectorAll - giving you a node list, so you can write functions without reversing them and converting

const items = document.querySelectorAll('li')
console.log('items', items)

items.forEach((item)=>{
    console.log('item', item)
})

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach((li, index)=>{
    li.style.color = 'grey'
})

liEven.forEach((li,index)=>{
    li.style.background='red'
})