const findIcon = (forecast) => {
    if (forecast.includes('Funnel Cloud') || forecast.includes('Tornado') || forecast.includes('Water Spout')) {
      return 'tornado'
    }
    if (forecast.includes('Thunderstorm')) {
      return 'storm'
    }
    if (forecast.includes('Freezing') || forecast.includes('Rain') && forecast.includes('Snow')) {
      return 'sleet'
    }
    if (forecast.includes('Hail') || forecast.includes('Ice')) {
      return 'hail'
    }
    if (forecast.includes('Snow')) {
      return 'snow'
    }
    if (forecast.includes('Rain') || forecast.includes('Drizzle')) {
      if (forecast.includes('Chance')) {
        return 'chancerain'
      } else {
        return 'rain'
      }
    }
    if (forecast.includes('Fog')) {
      return 'fog'
    }
    if (forecast.includes('Smoke')) {
      return 'smoke'
    } 
    if (forecast.includes('Dust') || forecast.includes('Sand')) {
      return 'dust'
    }
    if (forecast.includes('Windy') || forecast.includes('Breezy')) {
      return 'wind'
    }
    if (forecast.includes('Haze')) {
      return 'haze'
    }
    if (forecast.includes('Mostly Cloudy') || forecast.includes('Overcast')) {
      return 'cloudy'
    }
    if (forecast.includes('Clear') || forecast.includes('Fair') || forecast === 'Sunny') {
      return 'sunny'
    }
    else {
      return 'partlysunny'
    }
    }