// Grab Buttons

document.getElementById('button1').addEventListener('click', getText)

document.getElementById('button2').addEventListener('click', getJson)

document.getElementById('button3').addEventListener('click', getApiData)

//Get Text
function getText(){
  fetch('test.txt')
  .then(function(res){
    return res.text()
  })
  .then(function(data){
    document.getElementById('output').innerHTML = data
})
.catch(function(error){
  console.log(error);
})
}

// Get JSON
function getJson(){
  fetch('posts.json')
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data);
    let output = ''
    data.forEach(post => {
      output += `<li>${post.title}</li>`
    });
    document.getElementById('output').innerHTML = output
})
.catch(function(error){
  console.log(error);
})
}


// Get API DATA
function getApiData(){
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data);
    let output = ''
    data.forEach(user => {
      output += `<li>${user.login}</li>`
    });
    document.getElementById('output').innerHTML = output
})
.catch(function(error){
  console.log(error);
})
}






