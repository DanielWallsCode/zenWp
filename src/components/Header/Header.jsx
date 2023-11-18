import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="enlaces">
                    <Link to='/'>Inicio</Link>
                    <Link to='/about'>Sobre Nosotros</Link>
                    <Link to='/servicios'>Servicios</Link>
                    <Link to='/contact'>Contacto</Link>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/800px-Ethereum-icon-purple.svg.png" alt="" />
            </nav>
        </header>
    )
}

export default Header