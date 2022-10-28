import { useState, useEffect } from 'react'

export default function ShowPicture({ weather, daytime, weekly }) {

  const [icon, setIcon] = useState('')

  const getWeatherIcon = (now) => {
    if (now.includes('Chance Rain')) {
      if (daytime) {
        return 'chancerain'
      } else {
        return 'rain-night'
      }
    } else if (now.includes('Rain')) {
      if (daytime) {
        return 'rain'
      } else {
        return 'rain-night'
      }
    } else if (now.includes('Snow')) {
      if (daytime) {
        return 'snow'
      } else {
        return 'snow-night'
      }
    } else if (now.includes('Storm') || now.includes('storm')) {
      if (daytime) {
        return 'storm'
      } else {
        return 'snow-night'
      }
    } else if (now.includes('Cloudy')) {
      if (daytime) {
        return 'cloudy'
      } else {
        return 'cloudynight'
      }
    } else if (now.indexOf('Sunny') === 0 || now.includes('Clear')) {
      if (daytime) {
        return 'sun'
      } else {
        return 'clearnight'
      } 
    } else if (now.includes('Fog')) {
        return 'fog'
    } else if (now.includes('Windy')) {
      return 'wind'
    } else {
      if (daytime) {
        return 'partlysunny'
      } else {
        return 'cloudynight'
      }

    }
  }

  useEffect(() => {
    if (weather) {
        setIcon(getWeatherIcon(weather) + '.svg')
    }
  }, [weather])

return (
  <>
    {icon && <img src={`./images/${icon}`} alt="weather" />}
  </>
)
}