import './App.css'
import Models from './components/Models/Models'
import Header from './components/Header/Header'
import Context from './components/Context/Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gigi from './components/Models/List of Models/Gigi'



function App() {

  return (
    <>
      <Router>
        <Header/>  

       <Routes>
        <Route path='/' element={<Context/>} />
        <Route path='/models' element={<Models/>} />
        <Route path='/models/gigi' element={<Gigi/>}/>
       </Routes>
      
      </Router>
    </>
  )
}

export default App
