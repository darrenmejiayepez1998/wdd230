async function fetchWeatherData() {
    const apiKey = "cac9f7c8276d2ae47cd3f21893b9d470"
    const latitude = "40.30";
    const longitude = "-111.70";
    const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw new Error('Failed to fetch forecast data');
        }
    } catch (error) {
        console.error('Error fetching forecast data: ', error);
    }
}

function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = ''; // clears previous forecast data

     data.list.forEach(forecast => {
        const dateTime = new Date(forecast.dt + 1000);
        const temperature = Math.round(forecast.temp.day);
        const weatherDescription = forecast.weather[0].description;
        const iconCode = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        const forecastElement = document.createElement('div');
        forecastElement.classList.add('forecast-day');

        const dateElement = document.createElement('p');
        dateElement.textContent = dateTime.toDateString();

        const tempElement = document.createElement('p');
        tempElement.textContent = `Temperature: ${temperature} °C`;

        const descElement = document.createElement('p');
        descElement.textContent = `Condition: ${weatherDescription}`;

        const iconElement = document.createElement('img');
        iconElement.src = iconUrl;
        iconElement.alt = weatherDescription;

        forecastElement.appendChild(dateElement);
        forecastElement.appendChild(tempElement);
        forecastElement.appendChild(descElement);
        forecastElement.appendChild(iconElement);

        forecastContainer.appendChild(forecastElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchWeatherData);