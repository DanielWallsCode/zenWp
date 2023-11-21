import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="enlaces">
                    <Link to='/'>Inicio</Link>
                    <Link to='/acerca'>Sobre Nosotros</Link>
                    <Link to='/servicios'>Servicios</Link>
                    <Link to='/aprender'>Aprender</Link>
                    <Link to='/contacto'>Contacto</Link>
                </div>
                <img src="/zenWP.png" alt="" />
            </nav>
        </header>
    )
}

export default Header