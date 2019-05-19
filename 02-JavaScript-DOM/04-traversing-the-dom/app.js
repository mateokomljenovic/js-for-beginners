// Traversing The DOM

// Moving up and down, dealing with parents and children 

let result 

const list = document.querySelectorAll('ul.list')
const listItem = document.querySelector('li.item:first-child')

result = listItem
result = list

// Get child nodes 

result = listItem.childNodes[0]
result = listItem.childNodes[0].nodeName
result = listItem.childNodes[0].nodeType

//Type of Nodes 

// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype



// Get choildren element nodes
// result = listItem.children

console.log('result', result)

//NEEDS REVISITING
