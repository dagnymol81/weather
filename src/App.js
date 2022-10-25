import './App.css';
import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useFetch } from "./hooks/useFetch"

//pages
import Today from './pages/Today'
import Tomorrow from './pages/Tomorrow'
import Week from './pages/Week'
import Nav from './components/Nav';

function App() {

  const [location, setLocation] = useState("40.447,-80.0062")
  const LocationContext = createContext()



  return (
    <div className="App">

      <LocationContext.Provider value={location}>
        <Nav />
        <p>Weather for: {location}</p>
        <Routes>
          <Route path="/" element={<Today />}  />
          <Route path="/tomorrow" element={<Tomorrow />} />
          <Route path="/week" element={<Week />} />
        </Routes>
      </LocationContext.Provider>


    </div>
  );
}

export default App;

//40.447,-80.0062