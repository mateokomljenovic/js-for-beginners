//Prototypes

//Object.prototype
//Person.prototype

function Person(name, lastName, dob) {
    this.firstName = name
    // this.age = age
    this.lastName = lastName
    this.birthday = new Date(dob)
    // this.getAge = function(){
    //     const diff = Date.now() - this.birthday.getTime()
    //     const ageDate = new Date(diff) 
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
    // console.log('this', this)
}

//Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff) 
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

//Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

//Gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName
}

const john = new Person('John', 'Doe', '09-10-2010')
const mark = new Person('Mark', 'Hoppus', 'March 20 1999')
const mary = new Person('Mary', 'Johnson', 'September 10 1975')

console.log('john', john)
console.log('mark', mark)
console.log('mary :', mary)

mary.getsMarried('Smith')

console.log('john.calculateAge()', john.calculateAge())
console.log('mark.getFullName() :', mark.getFullName());
console.log('mary.getsMarried :', mary.getFullName());

console.log('mary.hasOwnProperty() :', mary.hasOwnProperty('firstName'));