import './Header.css'
function Header() {
  return (
        <div className="container-fluid">
            <div className="row">
                <header className="col-md-12">
                    <h1 className='col-md-8 mt-2'>SAY FMODEL</h1>
                    <nav>
                        <ul className="col-md-8">
                            <li>HOME</li>
                            <li>MODELS</li>
                            <li>ABOUT</li>
                            <li>CONNECT</li>
                        </ul>
                    </nav>
                </header>    
            </div>
        </div>
  )
}

export default Header
