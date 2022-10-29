import { useState, useEffect } from 'react'

export default function ShowPicture({ weather, daytime, weekly }) {

  const [icon, setIcon] = useState('')

  useEffect(() => {
    if (weather) {

      if (weather.includes('Chance Rain')) {
        if (daytime) {
          setIcon('rain.svg')
        } else {
          setIcon('rain-night.svg')
        }
      } else if (weather.includes('Rain')) {
        if (daytime) {
          setIcon('rain.svg')
        } else {
          setIcon('rain-night.svg')
        }
      } else if (weather.includes('Snow')) {
        if (daytime) {
          setIcon('snow.svg')
        } else {
          setIcon('snow-night.svg')
        }
      } else if (weather.includes('Storm') || weather.includes('storm')) {
        if (daytime) {
          setIcon('storm.svg')
        } else {
          setIcon('snow-night.svg')
        }
      } else if (weather.includes('Cloudy')) {
        if (daytime) {
          setIcon('cloudy.svg')
        } else {
          setIcon('cloudynight.svg')
        }
      } else if (weather.indexOf('Sunny') === 0 || weather.includes('Clear')) {
        if (daytime) {
          setIcon('sun.svg')
        } else {
          setIcon('clearnight.svg')
        } 
      } else if (weather.includes('Fog')) {
          setIcon('fog.svg')
      } else if (weather.includes('Windy')) {
        setIcon('wind.svg')
      } else {
        if (daytime) {
          setIcon('partlysunny.svg')
        } else {
          setIcon('cloudynight.svg')
        }
      }

}}, [weather, daytime])

return (
  <>
    {icon && <img src={`./images/${icon}`} alt="weather" />}
  </>
)
}