import Card from "./Card";
import Current from "./Current";


export default function TwoDay({ current, city, state, periodOne, periodTwo, periodThree  }) {

  return(
    <div>

      <h1>Weather for {city} {state}</h1>

      <div className="d-flex flex-row justify-content-around p-5">

      {current && <Current current={current} />}
      {periodOne && <Card period={periodOne} />}
      {periodTwo && <Card period={periodTwo} />}
      {periodThree && <Card period={periodThree} />}

    </div>
  </div>
  )
}