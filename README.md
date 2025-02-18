## Weather Forecast Application

## Overview
This Weather Forecast Application fetches real-time weather data for a given city using an API and displays essential weather information, including temperature, humidity, wind speed, sunrise and sunset timings, and more.

## Features
- Fetches weather data for any city.
- Displays temperature, humidity, wind speed, and weather conditions.
- Shows sunrise and sunset times.
- Provides minimum and maximum temperatures.
- User-friendly and responsive design.

## How It Works
1) The user enters the name of a city in the input field.
2) The application sends a request to the weather API (wttr.in) to fetch weather data.
3) The API returns the weather details in JSON format.
4) The application extracts relevant data and displays it on the screen.
5) If an error occurs (e.g., invalid city name or network issue), an error message is shown.

## Technologies Used
HTML – For structuring the webpage.
CSS – For styling the UI.
JavaScript (ES6+) – For fetching and displaying weather data.
API – wttr.in for weather data.

## Usage Instructions
Visit the live website to check the weather forecast: [https://weather-application-eta-seven.vercel.app/]
1) Open the website.
2) Enter a city name in the input field.
3) Press Enter or click the fetch button.
4) View the weather details instantly.

## API Details

- API Endpoint: https://wttr.in/{city}?format=j1
- Returns weather data in JSON format.

## Example API Response (Simplified)

<!-- {
  "current_condition": [{
    "temp_C": "25",
    "humidity": "60",
    "windspeedKmph": "15",
    "weatherDesc": [{"value": "Partly Cloudy"}]
  }],
  "nearest_area": [{
    "areaName": [{"value": "New York"}],
    "country": [{"value": "USA"}]
  }],
  "weather": [{
    "mintempC": "20",
    "maxtempC": "28",
    "astronomy": [{
      "sunrise": "06:30 AM",
      "sunset": "07:45 PM"
    }]
  }]
} -->

## Possible Errors & Fixes
- Invalid City Name → Enter a correct city name.

## License
- This project is open-source and free to use under the MIT License.

