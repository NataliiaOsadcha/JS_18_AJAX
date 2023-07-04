const weatherInfoDiv = document.getElementById('weather-info');
const weatherIconDiv = document.getElementById('weather-icon');

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


    const temperatureParagraph = document.createElement('p');
    temperatureParagraph.textContent = `Temperature: ${temperature} °C`;

    const pressureParagraph = document.createElement('p');
    pressureParagraph.textContent = `Pressure: ${pressure} hPa`;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = `Description: ${description}`;

    const humidityParagraph = document.createElement('p');
    humidityParagraph.textContent = `Humidity: ${humidity} %`;

    const speedParagraph = document.createElement('p');
    speedParagraph.textContent = `Wind Speed: ${speed} m/s`;

    const degParagraph = document.createElement('p');
    degParagraph.textContent = `Wind Direction: ${deg} °`;

    const iconImage  = document.createElement('img');
    iconImage.src = `http://openweathermap.org/img/w/${icon}.png`;
    iconImage.alt = 'Weather Icon';
    iconImage.classList.add("icon-style");





    weatherInfoDiv.appendChild(temperatureParagraph);
    weatherInfoDiv.appendChild(pressureParagraph);
    weatherInfoDiv.appendChild(descriptionParagraph);
    weatherInfoDiv.appendChild(humidityParagraph);
    weatherInfoDiv.appendChild(speedParagraph);
    weatherInfoDiv.appendChild(degParagraph);
    weatherIconDiv.appendChild(iconImage);

})

.catch(error => {
    console.log(error)
});

