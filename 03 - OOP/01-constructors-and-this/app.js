//Constructors and .this

// const mateo = {
//     name: 'Mateo',
//     age: 25
// }
// console.log('mateo', mateo)
// console.log('mateo.age', mateo.age)

//When you want to create multiple instances of object you want to use a constructor

//Constructor function
//Person constructor

function Person(name, dob) {
    this.name = name
    // this.age = age
    this.birthday = new Date(dob)
    this.getAge = function(){
        const diff = Date.now() - this.birthday.getTime()
        const ageDate = new Date(diff) 
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    // console.log('this', this)
}

//Instantiate an object

// const mateo = new Person("Mateo", 25)
// const john = new Person("John", 43)

// console.log(mateo)
// console.log(john)

const mateo = new Person('Mateo', '9-22-1993')
console.log('mateo', mateo.getAge())


