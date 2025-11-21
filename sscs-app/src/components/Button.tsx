import { useState } from 'react'
import './Button.css'

export default function Button() {
  const [count, setCount] = useState(0)

  return (
    <div className="button-container">
      <button 
        className="remote-button"
        onClick={() => setCount((count) => count + 1)}
      >
        Remote Button - Count: {count}
      </button>
      <p className="button-info">
        This button is loaded from the remote app!
      </p>
    </div>
  )
}
