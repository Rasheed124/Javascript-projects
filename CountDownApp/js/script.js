const c = console.log.bind(document);


let countDownDate = new Date().setHours(new Date().getHours()  +  720);
// let countDownDate = new Date().setMinutes(new Date().getMinutes()  + 5);
// let countDownDate = new Date().setSeconds(new Date().getSeconds()  + 50);


const formatTime = (time, string) => {
    return time == 1 ? `<span class="sub_time">${time}${string}</span>` : `<span class="sub_time" >${time}${string}s<span>`
}

let timeInterval = null;


const countDays = document.querySelector(".date"),
      countHours  =  document.querySelector(".hours"),
      countMintes  =  document.querySelector(".minutes"),
      countSeconds  =  document.querySelector(".seconds");


const setTimer = () => {
    const now = new Date().getTime();
    const countDown = new Date(countDownDate).getTime();

    const differnces = (countDown - now) / 1000;

    if(differnces < 1){
        endCountDown();
    }
   

    let days = Math.floor( differnces / (60 * 60 * 24) );
    let hours = Math.floor( differnces % (60 * 60 * 24)  / (60 * 60));
    let minutes = Math.floor( differnces % (60 * 60 )  / 60);
    let seconds = Math.floor( differnces % 60) ;
  

    countDays.innerHTML = formatTime(days, 'day');
    countHours.innerHTML = formatTime(hours, 'hour');
    countMintes.innerHTML = formatTime(minutes, 'minute');
    countSeconds.innerHTML = formatTime(seconds, 'second');
}

const endCountDown = () => {
    clearInterval(timeInterval );
}

window.addEventListener("load", () => {
    setTimer();

    timeInterval = setInterval(setTimer, 1000)
})