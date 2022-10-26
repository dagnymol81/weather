function useGeolocation() {
  function success(position) {
    setLocation(`${position.coords.latitude},${position.coords.longitude}`)
  }
  function error() {
    console.log('geolocation errior')
  }
  if (!navigator.geolocation) {
    console.log('geolocation unavailable')
  } else {
    navigator.geolocation.getCurrentPosition(success, error)
  }
}