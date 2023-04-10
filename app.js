document.getElementById("zip-submit").addEventListener("click", (event) => {
  event.preventDefault()
  getLocationByZIP().then((location) => {
    document.getElementById("title").textContent=`Forecast for ${location.city}`
      url = `https://api.weather.gov/points/${location.latlong}`
      return url;
  }).then((url) => {
      forecast = getForecast(url)
      return forecast
  }).then((forecast) => {
    console.log(forecast)
    frontPage(forecast)
  })
})

//todo: don't append

const frontPage = (dailyForecast) => {
  console.log(dailyForecast)
  const twoDay = dailyForecast.slice(0,4)
  const extendedForecast = dailyForecast.slice(4)

  extendedForecast.forEach(forecast => {
    const currentForecast = forecast.detailedForecast
    const temperature = forecast.temperature
    const icon = findIcon(forecast.shortForecast)
    const timeOfDay = forecast.isDaytime ? 'day' : 'night'
    let forecastRow = document.createElement("tr")
    forecastRow.innerHTML = `
    <td>${forecast.name}</td>
    <td><img src="images/${timeOfDay}/${icon}.svg" alt=${forecast.shortForecast} style="height: 3rem;"></td>
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
      <img src="images/${timeOfDay}/${icon}.svg" alt=${forecast.shortForecast}>
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


// frontPage(latlongURL)


