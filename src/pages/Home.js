import Today from "./Today";
import Welcome from "./Welcome";

export default function Home({current, today, tonight, city, state, getZip, useGeolocation }) {

  return(
    <>
    {Object.keys(current).length === 0 && <Welcome getZip={getZip} useGeolocation={useGeolocation} />}
    {Object.keys(current).length !== 0 && <Today current={current} today={today} tonight={tonight} city={city} state={state} />}
    </>
  )
}