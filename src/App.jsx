import { useState } from 'react'
import './App.css'
import Models from './components/Models/Models'
import Header from './components/Header/Header'
import Context from './components/Context/Context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>    
      <Context/>
      <Models/>
    </>
  )
}

export default App
