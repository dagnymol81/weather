import './App.css';
import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useFetch } from "./hooks/useFetch"

//pages
import Today from './pages/Today'
import Tomorrow from './pages/Tomorrow'
import Week from './pages/Week'
import Nav from './components/Nav';
import Zip from './components/Zip';

function App() {

  const [current, setCurrent] = useState({})
  const [today, setToday] = useState({})
  const [tonight, setTonight] = useState({})
  const [tomorrow, setTomorrow] = useState({})
  const [week, setWeek] = useState([])
  const [hourlyUrl, setHourlyUrl] = useState('')
  const [weeklyUrl, setWeeklyUrl] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  const [location, setLocation] = useState('')

  const findLocationFromZip = async (zip) => {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
    const data = await res.json()
    let _loc = `${data.places[0].latitude},${data.places[0].longitude}`
    setLocation(_loc)
  }

  useEffect(() => {
    if (zip) {
    findLocationFromZip(zip)  
    }
  }, [zip])

  const { data: nwsLocation } = useFetch(`https://api.weather.gov/points/${location}`)

  useEffect(() => {
    if(nwsLocation) {
      setHourlyUrl(nwsLocation.properties.forecastHourly)
      setWeeklyUrl(nwsLocation.properties.forecast)
      setCity(nwsLocation.properties.relativeLocation.properties.city)
      setState(nwsLocation.properties.relativeLocation.properties.state)
    }
  }, [nwsLocation])
  
  const { data: hourly } = useFetch(hourlyUrl)
  const { data: weekly } = useFetch(weeklyUrl)

  useEffect(() => {
    if (hourly) {
      setCurrent(hourly.properties.periods[0])
    }
  }, [hourly, current])

  useEffect(() => {
    if (weekly) {
      setToday(weekly.properties.periods[0])
      setTonight(weekly.properties.periods[1])
      setTomorrow(weekly.properties.periods[2])
      setWeek(weekly.properties.periods)
    }
  }, [weekly, today, tonight])

  const getZip = (enteredZip) => {
    setZip(enteredZip)
  }

  return (
    <div className="App">
        <Nav />
        <Zip getZip={getZip} />
        <p>Weather for: {location} {city} {state}</p>
        <Routes>
          <Route path="/" element={<Today current={current} today={today} tonight={tonight} />}  />
          <Route path="/tomorrow" element={<Tomorrow tomorrow={tomorrow} />} />
          <Route path="/week" element={<Week week={week} />} />
        </Routes>



    </div>
  );
}

export default App;

//40.447,-80.0062