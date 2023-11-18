import './Home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Portada from '../../components/Portada/Portada'
import { Link } from 'react-router-dom'
import FormContact from '../../components/FormContact/FormContact'

const Home = () => {
  return (
    <>

      <Header />

      <Portada portada={'https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/5a3c8/hero.webp'} />

      <div className='bienvenida'>
        <h2>Bienvenidos a ZenWP</h2>
        <p>Ethereum es la tecnología de gestión comunitaria que impulsa la criptomoneda ether (ETH) y miles de aplicaciones descentralizadas.</p>
        <a href="#">Explora los planes</a>
        {/* color 1c1cff */}
      </div>

      <div className="servicios">
        <div className='empezar'>
          <div className='text'>
            <h3>Empezar</h3>
            <p>Ethereum.org es su portal de entrada al mundo de Ethereum. Esta tecnología es nueva y está en constante evolución, por eso ayuda tener una guía. Estas son nuestras recomendaciones para adentrarse en este mundo.</p>
          </div>
          <img src="https://ethereum.org/static/9a6e158f4ffd1cb5de246a3ecd0d7f86/3e9a3/hackathon_transparent.webp" alt="" />
        </div>

        <div className="cards">
          <Link to='/servicios' >
            <div className="card">
              <div className="card-header">
                <img src="https://ethereum.org/static/810eb64d89629231aa4d8c7fe5f20ee5/d5009/developers-eth-blocks.webp" alt="" />
              </div>
              <div className="card-body">
                <h2>Diseño Web PYME</h2>
                <p>Una Cartera permite que se conecte a etherum y administre sus fondos</p>
              </div>
            </div>
          </Link>

          <Link to='/servicios' >
            <div className="card">
              <div className="card-header">
                <img src="https://ethereum.org/static/5dea0acbc8484c42006d7bbed32fa019/5ac00/doge-computer.webp" alt="" />
              </div>
              <div className="card-body">
                <h2>Diseño Web E-Commerce</h2>
                <p>Una Cartera permite que se conecte a etherum y administre sus fondos</p>
              </div>
            </div>
          </Link>
        </div>

        <div className='portafolio'>
          <div className='aside-image'>
            <img src="https://ethereum.org/static/e7a074a56d991c4f9e65857bafa0f053/4f889/what-is-ethereum.webp" alt="" />
          </div>

          <div className='text'>
            <h3>¿Qué es Ethereum?</h3>
            <p>Ethereum es una tecnología que alberga dinero digital, pagos globales y aplicaciones. La comunidad ha construido una próspera economía digital, nuevas formas audaces para que los creadores ganen en línea y mucho más. Está abierto a todos, al margen del lugar donde estén; lo único que se necesita es tener internet.</p>
            <a href="#">Ver Portafolio</a>
          </div>
        </div>

        <h2 className='subtitle'>Reseñas</h2>

        <div className='resenas'>

          <div className="resena">
            <div className="resena-header">
              <img src="https://lh3.googleusercontent.com/a-/ALV-UjXz8GW9HTvTRtdy6Y_2NEreW0c2wwY2iqmv3HAQEGLX-rqG=s120-c-rp-mo-ba3-br100" alt="" />
              <h4>Rafel Atala</h4>
            </div>

            <div className="resena-body">
              <p>
                Mi página web estuvo lista en menos de una semana. Muy rápido y confiable
              </p>
            </div>
          </div>

          <div className="resena">
            <div className="resena-header">
              <img src="https://lh3.googleusercontent.com/a-/ALV-UjVaYbEpmtw9IUwciu9UnTZMJ4XwhynAKoOqYqLJxyZRmzQ=s120-c-rp-mo-br100" alt="" />
              <h4>Catalina Martinez</h4>
            </div>

            <div className="resena-body">
              <p>
                Servicio muy profesional, contrate el servicio de diseño de página web, fueron súper amables a todos mis requerimientos y la página quedó 10/10Mi página web estuvo lista en menos de una semana. Muy rápido y confiable
              </p>
            </div>
          </div>

          <div className="resena">

            <div className="resena-header">
              <img src="https://lh3.googleusercontent.com/a-/ALV-UjUqBzqOZ2LgIh9NK2lXGD9rQ3QyOLgU-c39tnHasJBNmQs=s120-c-rp-mo-ba2-br100" alt="" />
              <h4>Isacar Levi H.</h4>
            </div>

            <div className="resena-body">
              <p>
                Todo perfecto entregas a tiempo, mi negocio creció un 110 por ciento gracias a este trabajo, recomendado
              </p>
            </div>
          </div>
        </div>

       <FormContact />

        <Footer />

      </div>

    </>
  )
}

export default Home