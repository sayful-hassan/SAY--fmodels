import './App.css'
import Models from './components/Models/Models'
import Header from './components/Header/Header'
import Context from './components/Context/Context'
import About from './components/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gigi from './components/Models/List of Models/Gigi'
import Kylie from './components/Models/List of Models/Kylie'
import Kendall from './components/Models/List of Models/Kendall'



function App() {

  return (
    <>
      <Router>
        <Header/>  

       <Routes>
        <Route path='/' element={<Context/>} />
        <Route path='/models' element={<Models/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/models/gigi' element={<Gigi/>} />
        <Route path='/models/kylie' element={<Kylie/>} />
        <Route path='/models/kendall' element={<Kendall/>} />
       </Routes>
      
      </Router>
    </>
  )
}

export default App
