"use strict";


let log = console.log.bind(document);

// const wrapper = document.querySelector(".popup-wrapper")
// const close = document.querySelector(".close")
// const btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     wrapper.style.display = "block";
// })
// close.addEventListener("click", () => {
//     wrapper.style.display = "none";
// })

// wrapper.addEventListener("click", () => {
//     wrapper.style.display = "none";
// })


// FOrms
// const form = document.querySelector("form");
// const pattern = /^[a-zA-Z]{6,12}$/;


// form.addEventListener("submit", (e) => {
//    e.preventDefault();

//    const para = document.createElement("p")

//    const userNameInput = form.username.value;


//    if(pattern.test(userNameInput)){

//     para.textContent = "valid Username";

//     form.appendChild(para);
      
//    }else{
//     para.textContent = "invalid Username";
//     form.appendChild(para);
//    }

// });

// form.username.addEventListener("keyup", e => {
    
//     if(pattern.test(form.username.value)){
//        form.username.setAttribute("class", "success");
//     }else{
//       form.username.setAttribute("class", "error");

//     }
// });



// const numarrray = [10, 20, 35, 40 , 60];

// const result = numarrray.filter((score) => {
//    return score > 20;
// });

// log(result);

// const users = [
//    {name: "shunli", premium: true},
//    {name: "yushi", premium: true},
//    {name: "dari", premium: false},
//    {name: "redy", premium: true}
// ];

// log(users);

// const premiunmUsers = users.filter( (user) => user.premium  );

// log(premiunmUsers);
// log(users);

// MAP
const products = [
   {name: "shunli", price: 40},
   {name: "yushi", price: 20 },
   {name: "dari", price: 60},
   {name: "redy", price: 10 }
];

const salesPrices = products.map( (product) => {
   if(product.price > 30){
      return {name: product.name, price: product.price / 2 };
   }else{
      return product;

   }
})

log(salesPrices);


// REDUCE METHOD
// const scores = [30, 50 , 10 , 20 ,80];

// const players = [
//    {player: "redy", price: 90},
//    {player: "yushi", price: 20 },
//    {player: "dari", price: 60},
//    {player: "redy", price: 10 }
// ];
// log(players.player)


// NOte curr pics the values in a the array
// while acc takes the index


// const result = players.reduce((acc, curr) => {

//    if(curr.player == "redy"){
//       acc += curr.price;
//    }
//    return acc;
    
// }, 0);

// log(result);


const scores = [30, 50 , 10 , 20 ,80];

// const  result = scores.find( (score) => {
//    return score > 30
// });

// log(result);
scores.sort( (a, b) =>{
   return a - b;
})
console.log(scores);