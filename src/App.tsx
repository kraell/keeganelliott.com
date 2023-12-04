import { useState } from 'react'
import './App.css'

function App() {
  const [me, setMe] = useState(null);

  return (
    <>
      <div>
      </div>
      <a href='https://www.linkedin.com/in/keeganelliott/' target='_blank'>
        <h1 className='me'>Keegan Elliott</h1>
      </a>
    </>
  )
}

export default App
