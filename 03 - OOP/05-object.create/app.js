//Object.create

const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName
    }
}

const mary = Object.create(personPrototypes)

mary.firstName = 'Mary'
mary.lastName = 'Johnson'
mary.age = 40

mary.getsMarried('Jordan')

console.log('mary', mary.greeting())

const mateo = Object.create(personPrototypes, {
    firstName: {value: 'Mateo'},
    lastName: {value: 'Komljenovic'},
    age: {value: 25}
})

console.log('mateo', mateo)
console.log('mateo.greeting()', mateo.greeting())


