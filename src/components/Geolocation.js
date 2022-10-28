export default function Geolocation({ useGeolocation }) {
  return(
    <div>
      <button onClick={useGeolocation} className="btn border bg-light">Find Me</button>
    </div>
  )
}