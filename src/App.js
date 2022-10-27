import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route, } from 'react-router-dom'
import { useFetch } from "./hooks/useFetch"

//pages
import Home from './pages/Home'
import Week from './pages/Week'
import About from './pages/About'

//components
import Nav from './components/Nav';

//todo geolocation component

function App() {

  //variables
  const [current, setCurrent] = useState({})

  const [periodOne, setPeriodOne] = useState({})
  const [periodTwo, setPeriodTwo] = useState({})
  const [periodThree, setPeriodThree] = useState({})

  const [week, setWeek] = useState([])
  const [hourlyUrl, setHourlyUrl] = useState('')
  const [weeklyUrl, setWeeklyUrl] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [location, setLocation] = useState('')

  //use zip code
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
  const getZip = (enteredZip) => {
    setZip(enteredZip)
  }

  //find NWS Location

  const { data: nwsLocation } = useFetch(`https://api.weather.gov/points/${location}`)

  useEffect(() => {
    if(nwsLocation) {
      setHourlyUrl(nwsLocation.properties.forecastHourly)
      setWeeklyUrl(nwsLocation.properties.forecast)
      setCity(nwsLocation.properties.relativeLocation.properties.city)
      setState(nwsLocation.properties.relativeLocation.properties.state)
    }
  }, [nwsLocation])
  
  //Get Forecasts
  const { data: hourly } = useFetch(hourlyUrl)
  const { data: weekly } = useFetch(weeklyUrl)

  useEffect(() => {
    if (hourly) {
      setCurrent(hourly.properties.periods[0])
    }
  }, [hourly, current])

  useEffect(() => {
    if (weekly) {
      setPeriodOne(weekly.properties.periods[0])
      setPeriodTwo(weekly.properties.periods[1])
      setPeriodThree(weekly.properties.periods[2])
      setWeek(weekly.properties.periods)
    }
  }, [weekly, periodOne, periodTwo])

  //Use Geolocation
  function useGeolocation() {
    function success(position) {
      setLocation(`${position.coords.latitude},${position.coords.longitude}`)
    }
    function error() {
      console.log('geolocation error')
    }
    if (!navigator.geolocation) {
      console.log('geolocation unavailable')
    } else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }


  //Display
  return (
    <div className="App">

        <Nav useGeolocation={useGeolocation} getZip={getZip} />

            <Routes>
              <Route path="/" element={<Home current={current} periodOne={periodOne} periodTwo={periodTwo} periodThree={periodThree} city={city} state={state} getZip={getZip} useGeolocation={useGeolocation} />}  />
              <Route path="/week" element={<Week week={week} />} />
              <Route path="/about" element={<About />} />
            </Routes>

    </div>
  );
}

export default App;

//40.447,-80.0062