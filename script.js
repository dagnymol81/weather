const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const latlongURL = 'https://api.weather.gov/points/40.5637,-79.8466'

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

const frontPage = async (latlongURL) => {
  dailyForecast = await getForecast(latlongURL)
  const twoDay = dailyForecast.slice(0,4)
  const extendedForecast = dailyForecast.slice(4)
  console.log(extendedForecast)

  extendedForecast.forEach(forecast => {
    const currentForecast = forecast.detailedForecast
    const temperature = forecast.temperature
    const icon = findIcon(forecast.shortForecast)
    const timeOfDay = forecast.isDaytime ? 'day' : 'night'
    let forecastRow = document.createElement("tr")
    forecastRow.innerHTML = `
    <td>${forecast.name}</td>
    <td><img src="/images/${timeOfDay}/${icon}.svg" alt=${forecast.shortForecast} style="height: 3rem;"></td>
    <td>${forecast.detailedForecast}</td>
    `
    document.querySelector("#extendedForecastTable").appendChild(forecastRow)
  })

  twoDay.forEach(forecast => {
    const currentForecast = forecast.detailedForecast
    const temperature = forecast.temperature
    const icon = findIcon(forecast.shortForecast)
    const timeOfDay = forecast.isDaytime ? 'day' : 'night'
    let forecastCard = document.createElement("div")
    forecastCard.innerHTML = `

      <div class="forecast-header"><strong>${forecast.name}</strong></div>

      <div class="forecast-body">
      <img src="/images/${timeOfDay}/${icon}.svg" alt=${forecast.shortForecast}>
      <h2>${temperature}&deg; F</h2>
      </div>

      <div class="forecast-footer">
      ${currentForecast}
      </p>
      </div>

    `
    document.querySelector("#twoDayDisplay").appendChild(forecastCard)
  })

}

const findIcon = (forecast) => {
  if (forecast.includes('Funnel Cloud') || forecast.includes('Tornado') || forecast.includes('Water Spout')) {
    return 'tornado'
  }
  if (forecast.includes('Thunderstorm')) {
    return 'storm'
  }
  if (forecast.includes('Freezing') || forecast.includes('Rain') && forecast.includes('Snow')) {
    return 'sleet'
  }
  if (forecast.includes('Hail') || forecast.includes('Ice')) {
    return 'hail'
  }
  if (forecast.includes('Snow')) {
    return 'snow'
  }
  if (forecast.includes('Rain') || forecast.includes('Drizzle')) {
    if (forecast.includes('Chance')) {
      return 'chancerain'
    } else {
      return 'rain'
    }
  }
  if (forecast.includes('Fog')) {
    return 'fog'
  }
  if (forecast.includes('Smoke')) {
    return 'smoke'
  } 
  if (forecast.includes('Dust') || forecast.includes('Sand')) {
    return 'dust'
  }
  if (forecast.includes('Windy') || forecast.includes('Breezy')) {
    return 'wind'
  }
  if (forecast.includes('Haze')) {
    return 'haze'
  }
  if (forecast.includes('Mostly Cloudy') || forecast.includes('Overcast')) {
    return 'cloudy'
  }
  if (forecast.includes('Clear') || forecast.includes('Fair') || forecast === 'Sunny') {
    return 'sunny'
  }
  else {
    return 'partlysunny'
  }
  }

frontPage(latlongURL)


