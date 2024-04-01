async function fetchWeatherData() {
    const apiKey = "cac9f7c8276d2ae47cd3f21893b9d470"
    const latitude = "40.30";
    const longitude = "-111.70";
    const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&cnt=3&appid=${apiKey}`;

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

    const currentDate = new Date(); // gets current date
    const threeDaysLater = new Date(currentDate); 
    threeDaysLater.setDate(currentDate.getDate() + 3);

    //filter out forecasts for the next three days
    const nextThreeDaysForecast = data.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt * 1000);
        return forecastDate >= currentDate && forecastDate < threeDaysLater;
    })

    nextThreeDaysForecast.forEach(forecast => {
    const dateTime = new Date(forecast.dt + 1000);
    const day = dateTime.toLocaleString('default', {weekday: 'long'}); // gets the day of the week
    const month = dateTime.toLocaleString('default', {month: 'short'}); // gets the month
    const temperature = Math.round(forecast.main.temp);
    const weatherDescription = forecast.weather[0].description;
    const iconCode = forecast.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    const forecastElement = document.createElement('div');
    forecastElement.classList.add('forecast-day');

    const dateElement = document.createElement('p');
    dateElement.textContent = `${day}, ${month}`; 

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