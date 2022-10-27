import TwoDay from "../components/TwoDay";
import Welcome from "../components/Welcome";

export default function Home({current, today, tonight, city, state, getZip, useGeolocation, tomorrow }) {

  return(
    <>
    {Object.keys(current).length === 0 && <Welcome getZip={getZip} useGeolocation={useGeolocation} />}
    {Object.keys(current).length !== 0 && today.isDaytime && <TwoDay current={current} today={today} tonight={tonight} city={city} state={state} tomorrow={tomorrow} />}
    </>
  )
}