const questions = document.querySelectorAll(".question");


questions.forEach(question => {
    const btnToggle = question.querySelector(".question-btn");
    btnToggle.addEventListener("click", () => {

        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })

        question.classList.toggle("show-text");
    })

})

