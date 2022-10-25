import { useFetch } from './useFetch'

export const useZIP = (zip) => {
  const zipUrl = `https://api.zippopotam.us/us/${zip}`
  const { data: zipdata } = useFetch(zipUrl)
  
}