const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
]

// getPost()
//Creating a promise - return new Promise(function(resolve, reject){}


function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post)
            const error = false

            if(!error){
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        
        }, 2000)
    })
}

function getPosts(){
    setTimeout(function(){
        let result = ''
        posts.forEach(function(post){
            result += `<li>${post.title}</li>`
        })
        document.body.innerHTML = result
    },1000)
}

createPost( {title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err){console.log(err)})