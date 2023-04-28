const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName("choice-text"));

const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");

const scoreText = document.getElementById("score")




let currentQuestion = {};

let acceptingAnswers = false;

let score = 0;

let questionCounter = 0;

let availableQuestions = [];

let questions = [

    {
        question: "What is the parent element of all html elements ??",
        choice1: "<head>",
        choice2: "<body>",
        choice3: "<html>",
        choice4: "<heading>",
        answer: 3

    },

    {
        question: "What is the common used in  html document ??",
        choice1: "<div>",
        choice2: "<p>",
        choice3: "<h2>",
        choice4: "<article>",
        answer: 1

    },

    {
        question: " html element is the parent element. True OR False ??",
        choice1: "true",
        choice2: "false",
        choice3: "correct",
        choice4: "incorrect",
        answer: 1

    },
    {
        question: "Which element refers to as web page view ??",
        choice1: "<title>",
        choice2: "<body>",
        choice3: "<section>",
        choice4: "<h4>",
        answer: 2

    },


]

// CONSTANSTS

const CORRECT_BONUS = 10;

const MAX_QUESTIONS = 3;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];


    getNewQuestion();
}


getNewQuestion = () => {


    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {

        localStorage.setItem("mostRecentScore", score)
        // go to the end page
        return window.location.assign("/end/end.html")
    }




    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


    questionCounter++;



    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    currentQuestion = availableQuestions[questionIndex]

    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true



}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;

        const selectAnswer = selectedChoice.dataset["number"]


        const classToApply = selectAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply == "correct") {
            incrementScore(CORRECT_BONUS)
        }


        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);


    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();