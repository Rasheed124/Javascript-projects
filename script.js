const video = document.querySelector(".video-container");

const preLoader = document.querySelector(".preloader");

const switchBtn = document.querySelector(".switch-btn");



window.addEventListener("load", () => {

    preLoader.classList.add("hide-preloader");


    switchBtn.addEventListener("click", () => {
        if(!switchBtn.classList.contains("slide")){
            switchBtn.classList.add("slide")
            video.pause()
        }else{
            switchBtn.classList.remove("slide")
            video.play()
        }
    })

 
})