const weatherInfoDiv = document.getElementById('weather-info');
console.log(weatherInfoDiv);

fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(response => {
    return response.json();
})
.then(function(data) {
    console.log(data);

    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const description  = data.weather[0].description;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
    const deg = data.wind.deg;
    const icon = data.weather[0].icon;

    let weatherInfoHtml =` 
    <p>Temperature: ${temperature} °C</p>
    <p>Description: ${description}</p>
    <p>Humidity: ${humidity} %</p>
    <p>Wind Speed: ${speed} m/s</p>
    <p>Wind Direction: ${deg} °</p>
    <img scr="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
    `;
    
    weatherInfoDiv.innerHTML = weatherInfoHtml;
})

.catch(error => {
    console.log(error)
});

