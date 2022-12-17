"use strict";


const c = console.log.bind(document);

const request  = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 )
})

request.open("GET", "./todos.json");

request.send();










