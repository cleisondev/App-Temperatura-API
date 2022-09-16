
const api = {
    key: "b50a2a5da566284820c9d0cfb8ad377a",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}


const getWeatherData = (city) => {
    const FULL_URL = `${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`;
    const weatherPromise  = fetch(FULL_URL);
    return weatherPromise.then((response) => {
      return response.json();
    })
  }
  
   const searchCity = () => {
    const city = document.getElementById('inputT').value;
    getWeatherData(city)
    .then((res)=>{
      showWeatherData(res);
    }).catch((error)=>{
      console.log(error);
      console.log("Something happend");
    })
  }
  
  /**
   * Show the weather data in HTML
   */
  showWeatherData = (weatherData) => {
    console.log(weatherData)
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = ` ${weatherData.main.temp} °C`;
    document.getElementById("min-temp").innerText = `min-temp: ${weatherData.main.temp_min} °C`;
    document.getElementById("max-temp").innerText = `max-temp: ${weatherData.main.temp_max} °C`;
    document.getElementById("temp").innerText = `Condição do tempo: ${weatherData.weather[0].description} `;
    
  }



