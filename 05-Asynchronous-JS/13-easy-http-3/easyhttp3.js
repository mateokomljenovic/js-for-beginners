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
    async get(url){
       const response = await fetch(url)

       const resData = await response.json()
       return resData
    }

    // Make POST request

    async post(url, data){
        const response = await fetch(url, {
             method: 'POST', 
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
             const resData = await response.json()
             return resData
        
     }

     // Make PUT request

    async put(url, data){
         const response = await fetch(url, {
             method: 'PUT', 
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
             const resData = await response.json()
             return resData
     }

     // Make DELETE request

     async delete(url){
         const response = await fetch(url, {
             method: 'DELETE', 
             headers: {
                 'Content-type': 'application/json'
             },
         })
         const resData = await 'Resource deleted...'
         return resData
     }
}
