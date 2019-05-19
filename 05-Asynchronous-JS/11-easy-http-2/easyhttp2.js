/**  
* EasyHTTP Libraty
* Library for making HTTP requests
*
*@version 2.0.1
*@author Mateo Komljenovic
*@license MIT
*
**/

class EasyHTTP {
    // Make GET request
    get(url){
       return new Promise((resolve, reject)=>{
        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
       })
    }

    // Make POST request

    post(url, data){
        return new Promise((resolve, reject)=>{
         fetch(url, {
             method: 'POST', 
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
             .then(res => res.json())
             .then(data => resolve(data))
             .catch(err => reject(err))
        })
     }

     // Make PUT request

     put(url, data){
        return new Promise((resolve, reject)=>{
         fetch(url, {
             method: 'PUT', 
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
             .then(res => res.json())
             .then(data => resolve(data))
             .catch(err => reject(err))
        })
     }

     // Make DELETE request

     delete(url){
        return new Promise((resolve, reject)=>{
         fetch(url, {
             method: 'DELETE', 
             headers: {
                 'Content-type': 'application/json'
             },

         })
             .then(res => res.json())
             .then(data => resolve('Resource deleted...'))
             .catch(err => reject(err))
        })
     }
}

