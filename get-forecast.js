const getLocationByZIP = async () => {
    const zipCode = document.getElementById("zip-text").value
    const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`)
    const location = await response.json()
    console.log(location.places[0]['place name'])
    console.log(location.places[0].state)
    return {latlong: location.places[0].latitude + ',' + location.places[0].longitude, city: location.places[0]['place name'] + ', ' + location.places[0].state}
}

// const latlongURL = localStorage.getItem("url")

const getForecast = async (latlongURL) => {

  //Find the Weather station info, including forecast URL
  const response = await fetch(latlongURL)
  const data = await response.json()
  const dailyForecastURL = data.properties.forecast
  const hourlyForecastURL = data.properties.forecastHourly

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