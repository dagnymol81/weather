export default function Geolocation({ useGeolocation }) {
  return(
    <div>
      <button onClick={useGeolocation} className="btn btn-primary">Find Me</button>
    </div>
  )
}