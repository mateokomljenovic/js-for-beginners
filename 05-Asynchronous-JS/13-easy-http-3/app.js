const http = new EasyHTTP

// GET USERS

// const users = http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// Create User Data

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

//Update User

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(() => console.log(data))
  .catch(err => console.log(err))