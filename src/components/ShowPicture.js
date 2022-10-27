import { useState, useEffect } from 'react'

export default function ShowPicture({ weather }) {

  const [icon, setIcon] = useState('')

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

  useEffect(() => {
    if (weather) {
      setIcon(getWeatherIcon(weather))
    }
  }, [weather])

return (
  <>
    {icon && <img src={`./images/${icon}.png`} alt="weather" />}
  </>
)
}