import Card from "./Card";
import Current from "./Current";
import ShowPicture from "./ShowPicture"
import Tomorrow from "./Tomorrow";
import Tonight from "./Tonight";

export default function TwoDay({ current, today, tonight, city, state, tomorrow }) {

  return(
    <div>

      <h1>Weather for {city} {state}</h1>

      <div className="d-flex flex-row justify-content-around p-5">

      {current && <Current current={current} today={today} />}



      <Card today={today} />

      {tonight && <Tonight today={today} tonight={tonight} />}

      <Tomorrow tomorrow={tomorrow} />

    </div>
  </div>
  )
}