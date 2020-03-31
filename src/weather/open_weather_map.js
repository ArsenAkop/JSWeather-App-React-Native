const WEATHER_API_KEY = "7cd8d1f06760cdef0c75ae58324546bc";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

//takes the zip input and generate an API call URL for the desired location
function zipUrl(zip) {
    return `${API_STEM}q=${zip}%units=imperial&APPID=${WEATHER_API_KEY}`;
}

//make the call and format API data (JSON)
function fetchForecast(zip) {
    return fetch(zipUrl(zip))
        .then(response => response.json())
        .then(responseJSON => {
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.weather[0].temp
            };
        })
        .catch(error => {
            console.error(error);
        })
}

export default { fetchForecast: fetchForecast };