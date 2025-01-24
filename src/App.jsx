import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Context from './components/Context/Context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Context />
    </>
  )
}

export default App
