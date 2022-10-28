import { useState, useEffect } from 'react'

export default function ShowPicture({ weather, daytime }) {

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
    } else if (now.indexOf('Sunny') === 0 || now.indexOf('Clear') === 0) {
      if (daytime) {
        return 'sun'
      } else {
        return 'clearnight'
      }
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
      setIcon(getWeatherIcon(weather))
    }
  }, [weather])

return (
  <>
    {icon && <img src={`./images/${icon}.svg`} alt="weather" />}
  </>
)
}