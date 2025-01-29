import './App.css'
import Models from './components/Models/Models'
import Header from './components/Header/Header'
import Context from './components/Context/Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <Router>
        <Header/>  
        
       <Routes>
        <Route path='/' element={<Context/>} />
        <Route path='/models' element={<Models/>} />
       </Routes>
      
      </Router>
    </>
  )
}

export default App
