document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'cac9f7c8276d2ae47cd3f21893b9d470';
    const latitude = '20.42';
    const longitude = '-86.92';
    const weatherUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

function displayWeather(data) {
    const weatherInfoSection = document.getElementById('weather-info');

    // clear previous weather info
    weatherInfoSection.innerHTML = '';

    // create elements to display weather info
    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Current Temperature: ${data.main.temp} °C`;

    const humidityElement = document.createElement('p');
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;

    const forecastElement = document.createElement('p');
    forecastElement.textContent = `Forecast for Tomorrow at 3:00 PM: ${data.weather[0].description}`;

    // this appends the weather elements to the weather info section
    weatherInfoSection.appendChild(temperatureElement);
    weatherInfoSection.appendChild(humidityElement);
    weatherInfoSection.appendChild(forecastElement);
}