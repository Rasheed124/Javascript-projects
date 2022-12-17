
const log = console.log.bind(document);
const myForm = document.querySelector(".quiz-form");
const showResult = document.querySelector(".result");
let displayScore = document.querySelector(".result .container span");

const correctAnswers = ['B', 'B', 'B', 'B'];


myForm.addEventListener("submit", e => {
    e.preventDefault();

    const userAnswers = [myForm.q1.value, myForm.q2.value,myForm.q3.value,myForm.q4.value];
    

    let score = 0;
    userAnswers.forEach((answer, index ) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })

        scrollTo(0, 0);
       
    showResult.classList.remove("d-none");

       let output = 0;
       const timer =  setInterval( () =>{
          showResult.querySelector("span").innerHTML  = `${output}%`;
          if(output == score){
            clearInterval(timer);
          }else{
             output++;
          }


       }, 10);

});




// log(showResult.querySelector("span"));
