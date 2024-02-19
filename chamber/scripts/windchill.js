document.addEventListener("DOMContentLoaded", function () {
    // This gets the tempature and speed elements
    var temperatureElement = document.getElementById("temperature");
    var windSpeedElement = document.getElementById("windSpeed");
    var windChillElement = document.getElementById("windChill");

    // Gets the values 
    var tempature = parseFloat(temperatureElement.textContent);
    var windSpeed = parseFloat(windSpeedElement.textContent);

    // this is to make sure tempature is in the limits
    if (tempature <= 50 && windSpeed > 3.0) {
        // Calculates windchill factor
        var windChill = calculateWindChill(tempature, windSpeed);
        // This displays the windchill
        windChillElement.textContent = "Wind Chill: " + windChill.toFixed(2) + " °F";
        }else {
            windChillElement.textContent ="N/A";
        }
});

// Function with windchill formula
function calculateWindChill(tempature, windSpeed) {
    var windChill = 35.74 + (0.6215 * tempature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempature * Math.pow(windSpeed, 0.16);
    return windChill
}