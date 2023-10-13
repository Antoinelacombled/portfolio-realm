import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import SceneOne from './components/SceneOne/SceneOne'
import SceneTwo from './components/SceneTwo/SceneTwo'
import SceneThree from './components/SceneThree/SceneThree'

function App() {

  return (
    <div className='super-container'>
      <SceneOne />
      <SceneTwo />
      <SceneThree />
      <Header />
    </div>
  )
}

export default App
