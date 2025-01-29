import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
        <div className="container-fluid">
            <div className="row">
                <header className="col-md-12">
                    <h1 className='col-md-8 mt-2'>SAY FMODEL</h1>
                    <nav>
                        <ul className="col-md-8">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/models">MODELS</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/connect">CONNECT</Link></li>
                        </ul>
                    </nav>
                </header>    
            </div>
        </div>
  )
}

export default Header
