import TwoDay from "../components/TwoDay";
import Welcome from "../components/Welcome";

export default function Home({current, periodOne, periodTwo, periodThree, city, state, getZip, useGeolocation }) {

  return(
    <>
    {Object.keys(current).length === 0 && <Welcome getZip={getZip} useGeolocation={useGeolocation} />}
    {Object.keys(current).length !== 0 && <TwoDay current={current} periodOne={periodOne} periodTwo={periodTwo} periodThree={periodThree} city={city} state={state}  />}
    </>
  )
}