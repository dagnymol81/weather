import { useRef } from 'react'

export default function Zip({ getZip }) {

  let zipRef = useRef()

  const handleSubmit = (e) => {
      e.preventDefault()
      getZip(zipRef.current.value)
      zipRef.current.value = ''
    }

  return(
    <div>
      <form onSubmit={handleSubmit} className="d-flex">
        <label htmlFor="zip">ZIP Code: </label>
            <input 
                id="zip" 
                type="text" 
                ref={zipRef} 
                className="form-control form-control-lg me-2"
                size="5"
                maxLength="5"
            />
          <button className="btn btn-primary">OK</button>
        </form>
    </div>
  )
}