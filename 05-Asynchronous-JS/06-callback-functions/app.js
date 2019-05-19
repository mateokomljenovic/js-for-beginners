// Callback functions

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
]

// function createPost(){
//     setTimeout(function(){
//         posts.push(post)
//     }, 2000)
// }

// function getPost(){
//     setTimeout(function(){
//         let result = ''
//         posts.forEach(function(post){
//             result += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = result
//     },1000)
// }

// createPost({title: "Post Three", body:"This is post Three"})

// getPost()

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post)
        callback()
    }, 2000)
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

createPost( {title: 'Post Three', body: 'This is post three'}, getPosts)