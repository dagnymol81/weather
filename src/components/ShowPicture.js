export default function ShowPicture({ today }) {

  console.log(today.shortForecast)

  let weather = today.shortForecast

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

  return(
    <>
    <img src={`./images/${icon}.png`} alt="weather" />
    </>
  )
}