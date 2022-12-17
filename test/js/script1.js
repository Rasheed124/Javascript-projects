"use strict";

let c =  console.log.bind(document);

// const calcAge = (num) => {

//     if(Number.isInteger(num) || num < 0 ){
//       c("negative is not required");
//     }else{
//        return num * 365;
//     }
  
//   }
  
//   let loggedResult = calcAge(6.5);
//   c(loggedResult);



// let room = {
//     name: "Room1",
//     price : `$45`,
//     rate: 100,
//     provision: [
//         {title: "How to build a website", likes: 30},
//         {title: "How to build an app", likes: 30}
//     ],

//     logIn: function(){
//         console.log("User logged in")
//     },
//     logBlogs: function (){

//         this.provision.forEach((blog, index) => {
//             console.log(blog.title, blog.likes);
//         })
         
//     }
// }

// room.logIn();
// console.log(room.logBlogs());

// console.log(this)






// 1 sumNumbers

// const sumNumbers = (num1, num2) => num1 + num2 ;

// let result = sumNumbers(3, 5);
// console.log(result );



// 2 secondsConverter

// const secondsConverter = (minute) => minute * 60;

// let result = secondsConverter(10);
// console.log(result);



// 3  triangleArea

// const triangleArea = (base, height) => (base * height ) / 2;

// let result = triangleArea(3 , 2);
// console.log(result);



// 4 addition

// const addition = (num) => num = num + 1 ;


// let result = addition(-3);
// console.log(result);



// 5 calcAge

// const calcAge = (ageValue) => {

//     ageValue = prompt("Input number. No negative number ",);
//   let calcResult =  ageValue.includes("-") ?  console.log("No negative age") :  ageValue * 365;

//   return calcResult;


// }

// console.log(calcAge());



// 6 getFirstValue

// const getFirstValue = (numArry) => {

//     let resultFirstElement = numArry[0];

//     return resultFirstElement;

// }

// c(getFirstValue([-500, 0, 50]) )



// 7 howManySeconds

// const howManySeconds = (hr) =>{
//   return  hr * 60**2;
// } 

// let result = howManySeconds(2);
// c(result);



// 8 circuitPower p = IV;


// const circuitPower = (voltage, current) => (voltage * current );

// let result = circuitPower(230, 10);

// c(result);



// 9 remainder 

// const remainder = (num1, num2) => (num1 % num2 );

// let result = remainder(3, 4);

// c(result);


// 10 remainder 

// const lessThan100 = (num1, num2) =>{

//     let sumNums = num1 + num2;

//     if(sumNums < 100){
//         return true;
//     }else{
//         return false;
//     }
// }

// let result = lessThan100(83, 34);

// c(result);




