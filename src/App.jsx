import { useState } from 'react'

import './App.css'
import RickandMorty from './Components/RickandMorty'
import ResidentInfo from './Components/ResidentInfo'
import Banner from './Components/Banner'

function App() {
 

  return (
    <div className="App">
      <Banner />
      <RickandMorty />
      <div className='Container_ResidentInfo'>
       <ResidentInfo />
      </div>
      
      
      
    </div>
  )
}

export default App
