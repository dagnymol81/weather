export default function ShowPicture({ today }) {

  console.log(today.shortForecast)

  let weather = today.shortForecast
  let temperature = today.temperature


  const getWeatherIcon = (weather) => {

    if (weather.includes('Chance Rain')) {
      return 'chancerain'
    } else if (weather.includes('Rain')) {
      return 'rain'
    } else if (weather.includes('Snow')) {
      return 'snow'
    } else if (weather.includes('Storm') || weather.includes('storm')) {
      return 'storm'
    } else if (weather.includes('Cloudy')) {
      return 'cloudy'
    } else if (weather.indexOf('Sunny') === 0) {
      return 'sun'
    } else {
      return 'partlysunny'
    }
  }

  let icon = getWeatherIcon(weather)

  const getGreeting = (weather, temperature) => {
    switch(true) {
      case weather.includes('Rain'):
        return 'Remember your umbrella!'
      case temperature < 40:
        return 'Wear your winter coat and gloves!'
      case weather.includes('Sunny'):
        return('Enjoy the sun!')      
      default:
        return 'Have fun!'
    }
  }
  let greeting = getGreeting(weather, temperature)

  return(
    <>
    <img src={`./images/${icon}.png`} alt="weather" />
    {greeting}
    </>
  )
}