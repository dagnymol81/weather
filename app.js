document.getElementById("zip-submit").addEventListener("click", (event) => {
  event.preventDefault()
  getLocationByZIP().then((location) => {
      url = `https://api.weather.gov/points/${location}`
      return url;
  })
  .then((url) => {
      forecast = getForecast(url)
      return forecast
  })
  .then((forecast) => {
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

      const twoDay = document.getElementById("twoDayDisplay")
      
      const welcome = document.createElement("div")
      welcome.id = "welcome"
      
      const title = document.createElement("h2")
      title.textContent = "What's the Weather?"
      const instructions = document.createElement("p")
      instructions.textContent = "Enter your ZIP code or click Find Me!"
      const note = document.createElement("p")
      note.textContent = "Note: this website relies on data from the National Weather Service; therefore, only US locations are supported."
      const img = document.createElement("img")
      img.src = "images/forecast.png"
      img.alt = "Line art image of a weather forecast"

      welcome.appendChild(title)
      welcome.appendChild(instructions)
      welcome.appendChild(note)
      welcome.appendChild(img)

      twoDay.appendChild(welcome)
      
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

    const header = document.createElement("div")
    header.className = "forecast-header"
      const headerText = document.createElement("strong")
      headerText.innerText = forecast.name
      header.appendChild(headerText)


    const body = document.createElement("div")
    body.className = "forecast-body" 
      const img = document.createElement("img")
      img.src = `images/${timeOfDay}/${icon}.svg`
      img.alt = forecast.shortForecast
      const temp = document.createElement("h2")
      temp.innerText = `${temperature}° F`
    body.appendChild(img)
    body.appendChild(temp)

    const footer = document.createElement("div")
    footer.className = "forecast-footer"
    footer.innerText = currentForecast
    
    forecastCard.appendChild(header)
    forecastCard.appendChild(body)
    forecastCard.appendChild(footer)

    document.querySelector("#twoDayDisplay").appendChild(forecastCard)
  })

}
