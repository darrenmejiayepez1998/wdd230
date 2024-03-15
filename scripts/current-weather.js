async function fetchWeatherData() {
    const apiKey = "cac9f7c8276d2ae47cd3f21893b9d470"
    const city = "Orem";
    const url = `'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temperature = Math.round((data.main.temp - 32) * 5/9); // this converts to celcius
            const weatherDescription = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

            document.getElementById('weather-temp').textContent = `Temperature: ${temperature}  °C`;
            document.getElementById('weather-desc').textContent = `condition: ${weatherDescription}`;
            document.getElementById('weather-icon').setAttribute('src', iconUrl);
            document.getElementById('weather-icon').setAttribute('alt', weatherDescription);git
        })
        .catch(error => console.error('Error fetching weather data:'. error));
}
document.addEventListener('DOMContentLoaded', fetchWeatherData);