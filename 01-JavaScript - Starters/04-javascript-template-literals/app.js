// Template literals

const name = 'John'
const age = 35 
const job = 'Web Developer'
const city = 'Toronto'
let result;

// Without template strings(literals) (ES5)

result = 
    '<ul><li>Name: ' + name + 
    '</li><li>Age: ' + age + 
    '</li><li>Job: ' + job + 
    '</li><li>City: ' + city + 
    '</li></ul>'; 
    // console.log('result', result)

// With template strings(literals) (ES6)

function hello(){
    return 'Hello!'
}

result = 
`<ul>
    <li>Name: ${name} </li>
    <li>Age: ${age} </li>
    <li>Job ${job} </li>    
    <li>City: ${city} </li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>`
    document.body.innerHTML = result
        
