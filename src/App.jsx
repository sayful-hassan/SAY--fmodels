import { useState } from 'react'
import './App.css'
import Models from './components/Models/Models'
import Header from './components/Header/Header'
import Context from './components/Context/Context'
import Gigi from './components/Models/List of Models/Gigi'
import Kylie from './components/Models/List of Models/Kylie'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>    
      <Context/>
      <Models/>
      <Gigi/>
      <Kylie/>
    </>
  )
}

export default App
