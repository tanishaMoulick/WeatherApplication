const inputBox = document.querySelector('.input-box');
const searchBtn= document.getElementById('searchBtn');
const weather_img= document.querySelector('weather-img');
const temperature = document.querySelector('temperature');
const description = document.querySelector('description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


async function checkWeather(city){
    const api_key = "1172493216530e7dbc87dd4fd78e6421";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';
    //const url='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${api_key}';

    const weather_data = fetch ('${url}').then(response => response.json());

    temperature.innerHTML = '${weather_data.main.temp}';

    //console.log(weather_data);
}

searchBtn.addEventListener('click',()=>{checkWeather(inputBox.value);
});