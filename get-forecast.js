const getLocationByZIP = async () => {
    const zipCode = document.getElementById("zip-text").value
    const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`)
    const location = await response.json()
    return location.places[0].latitude + ',' + location.places[0].longitude
}

const getLocationByGeolocation = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }

const getForecast = async (latlongURL) => {

    //store url in local storage for future visits
    localStorage.setItem("url", latlongURL)

    //Find the Weather station info, including forecast URL
    const response = await fetch(latlongURL)
    const data = await response.json()
    const dailyForecastURL = data.properties.forecast
    const hourlyForecastURL = data.properties.forecastHourly

    //Set location in heading
    document.getElementById("title").textContent=`Forecast for ${data.properties.relativeLocation.properties.city}, ${data.properties.relativeLocation.properties.state}`

    //Get Forecasts
    const dailyForecastResponse = await fetch(dailyForecastURL)
    const dailyForecast = await dailyForecastResponse.json()
    const hourlyForecastResponse = await fetch(hourlyForecastURL)
    const hourlyForecast = await hourlyForecastResponse.json()

    //Construct an array with first hour from hourly ("Now") plus daily forecasts
    const forecast = dailyForecast.properties.periods
    forecast.unshift(hourlyForecast.properties.periods[0])
    forecast[0].name = "Now"
    forecast[0].detailedForecast = `${forecast[0].shortForecast} with a wind speed of ${forecast[0].windSpeed} and relative humidity of ${forecast[0].relativeHumidity.value}%`

    //Return array of forecasts
    return forecast

}