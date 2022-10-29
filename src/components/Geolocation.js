export default function Geolocation({ useGeolocation }) {
  return(
    <div>
      <button onClick={useGeolocation} className="btn border bg-light p-2">Find Me</button>
    </div>
  )
}