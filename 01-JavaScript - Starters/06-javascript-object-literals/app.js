// Object literals 

const person = {
    firstName: 'Stephen',
    lastName: 'Smith',
    age: 46, 
    email: 'stephen@gmail.com',
    hobbies: ['basketball', 'running'],
    address: {
        city: 'Boston', 
        state: 'MA'
    },
    getBirthYear: function(){
        return 2019 - this.age
    }
}

//Accessing property

let result 

result = console.log(person)

//Accessing specific value

result = console.log(person.firstName)
result = console.log(person.lastName)
result = console.log(person.age)
result = console.log(person.hobbies)
result = console.log(person.address.city)
result = console.log(person.getBirthYear())

const people =[
    {name: 'John', age: 46},
    {name: 'Mike', age: 37}
]

for(let i = 0; i < people.length; i++){
    console.log(people[i].name)
}