document.getElementById("zip-submit").addEventListener("click", (event) => {
  event.preventDefault()
  getLocationByZIP().then((location) => {
      url = `https://api.weather.gov/points/${location.latlong}`
      return url;
  }).then((url) => {
      forecast = getForecast(url)
      return forecast
  }).then((forecast) => {
    frontPage(forecast)
  })
})

document.getElementById("geo").addEventListener("click", (event) => {
  event.preventDefault()
  getLocationByGeolocation()
    .then((position) => {
      url = `https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`
      return url
    })
    .then((url) => {
      forecast = getForecast(url)
      return forecast
    })
    .then((forecast) => {
      frontPage(forecast)
    })
  })

  window.addEventListener("load", (event) => {
    const savedURL = localStorage.getItem("url")
    if (savedURL) {
      getForecast(savedURL).then((forecast) => {
        frontPage(forecast)
      })
    } else {
      document.getElementById("twoDayDisplay").innerHTML = `
      <div id="welcome">
      <h2>What's the Weather?</h2>
      <p>Enter your ZIP Code or click Find Me!</p>
      <p>Note: this website relies on data from the National Weather Service; therefore, only US locations are supported.</p>
      <img src="images/forecast.png" alt="Line art image of a weather forecast">
    </div>
      `
    }
  })

const frontPage = (dailyForecast) => {

  const twoDay = dailyForecast.slice(0,4)
  const extendedForecast = dailyForecast.slice(4)

  let twoDayDisplay = document.getElementById("twoDayDisplay");
  while (twoDayDisplay.firstChild) {
    twoDayDisplay.removeChild(twoDayDisplay.firstChild);
  }

  let extendedForecastDisplay = document.getElementById("extendedForecastTable");
  while (extendedForecastDisplay.firstChild) {
    extendedForecastDisplay.removeChild(extendedForecastDisplay.firstChild);
  }

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
    forecastCard.className = "card"
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
