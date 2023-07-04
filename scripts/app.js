const c = console.log.bind(document);

const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const forecast = new Forecast();


const updateUi = (data) => {

    // Destructure properties application
    const { cityDetails,  weather } = data;

    // Updating Details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `;

    const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;

    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = './img/day.svg';
    }else{
        timeSrc = './img/night.svg';
    }
    time.setAttribute('src', timeSrc)


    // Removing class if it contains class
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none")
    }
}



// Getting Form data (value) from UI(user)
const cityForm = document.querySelector("form");

cityForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Getting City Data into UC and resolve(then) or reject(Catch) data
    forecast.updateCity(city)
    .then(data => updateUi(data))
    .catch(err => console.log(err))

    localStorage.setItem('city', city);

})

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUi(data))
    .catch(err => console.log(err))
}