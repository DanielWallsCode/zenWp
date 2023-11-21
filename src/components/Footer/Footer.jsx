import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="left-container">
            <p>Copyright © 2023 ZenWP</p>
        </div>
        <div className="right-container">
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/acerca">Sobre Nosotros</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/Aprender">Aprender</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </div>
    </footer>
  )
}

export default Footer