import { useState } from "react"
import { useEffect } from "react"

export default function ShowPicture({ current, today }) {

  let now = current.shortForecast
  let later = today.shortForecast
  let temperature = today.temperature
  let currentTemperature = current.temperature

  const [icon, setIcon] = useState('')
  const [greeting, setGreeting] = useState('')

  const getWeatherIcon = (now) => {

    if (now.includes('Chance Rain')) {
      return 'chancerain'
    } else if (now.includes('Rain')) {
      return 'rain'
    } else if (now.includes('Snow')) {
      return 'snow'
    } else if (now.includes('Storm') || now.includes('storm')) {
      return 'storm'
    } else if (now.includes('Cloudy')) {
      return 'cloudy'
    } else if (now.indexOf('Sunny') === 0 || now.indexOf('Clear') === 0) {
      return 'sun'
    } else {
      return 'partlysunny'
    }
  }


  const getGreeting = (later, now, temperature) => {
    switch(true) {
      case later.includes('Rain') || now.includes('Rain'):
        return 'Remember your umbrella!'
      case temperature < 40:
        return 'Wear your winter coat and gloves!'
      case later.includes('Sunny') && now.includes('Sunny'):
        return('Enjoy the sun!')      
      default:
        return 'Enjoy Your Day!'
    }
  }

  useEffect(() => {
    if (now && later && temperature) {
      setIcon(getWeatherIcon(now))
      setGreeting(getGreeting(later, now, temperature))
    }
  }, [now, later, temperature])


  return(
    <>

  <div className="card weather-card border-info rounded-2 shadow-lg">
    <div className="card-header fs-2">
    {now} {currentTemperature}F
    </div>
    {icon && <img src={`./images/${icon}.png`} alt="weather" />}
    <div className="card-body">
      {greeting && <p className="card-text m-1 fs-2 text-center">{greeting}</p>}
    </div>
  </div>

    
    
    </>
  )
}