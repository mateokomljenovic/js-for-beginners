// Create Elements

const li = document.createElement('li')

//Add Class 

li.className = 'item'

//Add ID

li.id = 'newItem'

//Add an attribute

li.setAttribute('title', 'New Item')

//Create text node and append

li.appendChild(document.createTextNode('Hello World!'))

// Create new link element 

const link = document.createElement('a')
//Add classes
link.className = "delete-item secondary content"
//Add icon html 
link.innerHTML = '<i class="fa fa-remove"></i>'
//Append link into <li>
li.appendChild(link)

//Append <li> as child to <ul>

document.querySelector('ul.list').appendChild(li)

console.log('li', li)

