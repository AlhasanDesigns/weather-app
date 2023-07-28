
const apiKey = "e68e411f74abcb867789e5d80703f632";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city + '&appid=' + apiKey);
        var data = await response.json(); 

        console.log(data);

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather-text").innerHTML = data.weather[0].main;

        weatherIcon.src = "images/" + data.weather[0].main.toLowerCase() + ".png";
        weatherIcon.alt = data.weather[0].main;

    } catch (error) {
        console.error('Error:', error);
    }
}

checkWeather("Tampa");

searchBtn.addEventListener("click", async ()=>{

   await checkWeather(searchBox.value);

});


