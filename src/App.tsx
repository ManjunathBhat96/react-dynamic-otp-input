import { useState } from 'react'
import './App.css'
import Otp from './otp/Otp'

function App() {
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',margin:'100px' }}>
      <Otp blocks={6} />
    </div>
  )
}

export default App
