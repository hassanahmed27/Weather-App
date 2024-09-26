const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_image = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkweather(city){
    const api_key = "af6de26c7b40455ea205fab3d6ac49b6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(Response => Response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;


    switch(weather_data.weather[0].main){
        case 'Clouds' : 
            weather_image.src="clouds.png";
            break;
        case 'Clear' : 
            weather_image.src="clear.png";
            break;
        case 'Rain' : 
            weather_image.src="rain.png";
            break;
        case 'Mist' : 
            weather_image.src="mist.png";
            break;
        case 'Snow' : 
            weather_image.src="Snow.png";
            break;
        case 'Drizzle' : 
            weather_image.src="drizzle.png";
            break;
        case 'Wind' : 
            weather_image.src="wind.png";
            break;
    }
}
searchBtn .addEventListener('click',()=>{
    checkweather(inputBox.value);
})