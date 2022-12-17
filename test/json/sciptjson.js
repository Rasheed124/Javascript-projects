const c = console.log.bind(document);
const getTodos = (response,callback) => {

      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
            //    callback(undefined, data)
                  resolve(data)
            }else if(request.readyState === 4){
                reject(err);
            }
        })
        
        request.open("GET",  response);
        request.send();
      })

}
getTodos('./books.json').then( (data) => {
    console.log(data)
    return getTodos('./works.json').then( data => {
     console.log(data)
     return getTodos('./todos.json').then( data => {
        console.log(data)
       })
    });
}).catch((err) => {
    console.log(err)
})
// getTodos('./books.json', (err, data) => {
//     console.log(data);
//     getTodos('./works.json', (err, data) => {
//         console.log(data);
//         getTodos('./todos.json', (err, data) => {
//             console.log(data);
    
//         });
//     });
// });

