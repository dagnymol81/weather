import { useRef } from 'react'

export default function Zip({ getZip }) {

  let zipRef = useRef()

  const handleSubmit = (e) => {
      e.preventDefault()
      getZip(zipRef.current.value)
    }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zip">ZIP Code:</label>
          <br/>
            <input 
                id="zip" 
                type="text" 
                ref={zipRef} 
            />
            <br/><br/>
          <button>Submit</button>
        </form>
    </div>
  )
}