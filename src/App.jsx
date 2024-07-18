import { useState } from 'react'
import Spline from '@splinetool/react-spline';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Spline scene="https://prod.spline.design/h1Lh8QRsUv9qcD2y/scene.splinecode" className='w-full h-screen'><p className='z-50'>Hello</p></Spline>
    </div>
    
  )
}

export default App
