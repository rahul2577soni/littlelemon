import Nav from './Nav.js'
import logo from '../assets/images/logo.png';
const Header = () => {
    return (
        <header>
            <div className="header-logo" >
                <img src={logo} alt="Little Lemon" className="logo" />
            </div>
            <Nav />
        </header>
    )    
}

export default  Header