async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    const url = `https://wttr.in/${city}?format=j1`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const temp = data.current_condition[0].temp_C;
        const humidity = data.current_condition[0].humidity;
        const cityName = data.nearest_area[0].areaName[0].value;
        const country = data.nearest_area[0].country[0].value;
        
        const minTemp = data.weather[0].mintempC;
        const maxTemp = data.weather[0].maxtempC;
        const windSpeed = data.current_condition[0].windspeedKmph;
        const condition = data.current_condition[0].weatherDesc[0].value;
        const sunrise = data.weather[0].astronomy[0].sunrise
        const sunset = data.weather[0].astronomy[0].sunset
        
        
        document.getElementById('weatherResult').innerHTML = `
                <div class="city-info">${cityName}, ${country}</div>
                <div class="sun">
                    <div class="sunrise">Sunrise 🌅 : ${sunrise} </div>
                    <div class="sunset">Sunset 🌇: ${sunset} </div>
                </div>
                <div class="temp">${temp}°C</div>
                <div class="condition">${condition}</div>
                <div class="weather-details">
                    <div class="row">
                        <div class="weather-card">
                            <p><strong>Humidity</strong></p>
                            <p>${humidity}%</p>
                        </div>
                        <div class="weather-card">
                            <p><strong>Wind Speed</strong></p>
                            <p>${windSpeed}KMPH</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="weather-card">
                            <p><strong>Min Temperature</strong></p>
                            <p>${minTemp}°C</p>
                        </div>
                        <div class="weather-card">
                            <p><strong>Max Temperature</strong></p>
                            <p>${maxTemp}°C</p>
                        </div>
                    </div>
                </div>
        `;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = '<p style="color: red;">Error fetching weather data. Try again.</p>';
    }
}