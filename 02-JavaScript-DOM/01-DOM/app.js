// Document Object Model

let result 

result = document
result = document.all
result = document.all[2]
result = document.all.length
result = document.head
result = document.body
result = document.domain
result = document.URL
result = document.characterSet
result = document.contentType

result = document.forms

result = document.links

result = document.images

result = document.scripts
result = document.scripts[0].getAttribute('src')

//Foreach with collection

let scripts = document.scripts

let scriptsArr = Array.from(scripts)

scriptsArr.forEach(function(script){
    console.log('script :', script);
})


console.log(scriptsArr)