"use strict";

const c = console.log.bind(document);

const boxColor = document.querySelector(".container");

boxColor.addEventListener("click", (e) => {
    // e.stopPropagation();

    const randColors = Math.random().toString(16).substring('2', '8');
   c(randColors)

    if(e.target.classList.contains("btn")){
        // e.target.innerHtml = randColors;
    }
})



