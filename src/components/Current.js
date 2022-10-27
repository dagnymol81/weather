import ShowPicture from './ShowPicture'

export default function Current({ current }) {

  let now = current.shortForecast
  let currentTemperature = current.temperature

  return(

<div className="card weather-card border-info rounded-2 shadow-lg fs-4 m3">
    <div className="card-header fs-2">
    Now
    </div>


    <div className="card-body">

    {now && <ShowPicture weather={now} />}

    </div>
    <div class="card-footer">
    {now} {currentTemperature}F
   </div>



    </div>
 

)}