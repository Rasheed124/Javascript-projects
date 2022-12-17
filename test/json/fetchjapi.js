"use strict";



// fetch('./todos.json').then((response) => {
//     return response.json();
// }).then((data => {
//     console.log(data);
// })).catch( (err) => {
//     console.log(err)
// })

const getTodos = async () => {
    const response = await fetch('./todoes.json');

    if(response.status !== 200){
        throw new Error("could not get any data")
    }
    
    const data = await response.json();

    return data;
}

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message))