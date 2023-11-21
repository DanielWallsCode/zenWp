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

      <Portada portada={'/ZENWP-P.png'} />

      <div className='bienvenida'>
        <h2>Bienvenidos a ZenWP</h2>
        <p>¡Bienvenidos a ZenWP! Transformamos tu visión en una experiencia digital única. ¡Descubre el arte de la presencia online con nosotros</p>
        <Link to="/servicios">Explora los planes</Link>
        {/* color 1c1cff */}
      </div>

      <div className="servicios">

        <div className="boton-flotante">
          <a href="https://wa.me/51948741728"><img src="https://hostingroup.pe/wp-content/uploads/2020/09/whatsapp-chat.png" alt="" /></a>
        </div>

        <div className='empezar'>
          <div className='text'>
            <h3>Empezar</h3>
            <p>Donde tu visión cobra vida en el mundo digital En nuestro viaje hacia la excelencia web, cada clic es una oportunidad para crear una experiencia única. ¿Listo para dar el primer paso hacia una presencia online impactante? Descubre el arte de la web con ZenWP.</p>
          </div>
          <img src="https://www.juicy-studio.cat/wp-content/uploads/2021/02/programer.png" alt="" />
        </div>

        <div className="cards">
          <Link to='/servicios/#desarrollo' >
            <div className="card">
              <div className="card-header">
                <img src="https://visualtec.host/templates/default/frontend/img/demo-content/images/design.png" alt="" />
              </div>
              <div className="card-body">
                <h2>Desarrollo de Paginas Web</h2>
                <p>Potencia tu presencia online con ZenWP. Desarrollo de paginas web para empresas y tiendas en linea. ¡Haz que tu negocio brille en la web!</p>
              </div>
            </div>
          </Link>

          <Link to='/servicios/#marketing' >
            <div className="card">
              <div className="card-header">
                <img src="https://brainfoodmkt.com/wp-content/uploads/2022/12/agencia-de-marketing-digital-en-cdmx-1024x683.png" alt="" />
              </div>
              <div className="card-body">
                <h2>Marketing Digital</h2>
                <p>¡Eleva tu negocio con publicidad en redes sociales Potencia tus ventas con estilo y funcionalidad.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className='portafolio'>
          <div className='aside-image'>
            <img src="https://playfulagency.com/wp-content/uploads/2022/01/Programacion-web.png" alt="" />
          </div>

          <div className='text'>
            <h3>¿Qué es ZenWP?</h3>
            <p>ZenWP es más que una agencia de diseño web es tu socio digital en la creación de experiencias impactantes. En el corazón de nuestro enfoque se encuentra la fusión armoniosa de creatividad y funcionalidad. Somos artesanos digitales, dando forma a tu visión con maestría técnica. Desde sitios web cautivadores hasta soluciones online poderosas, en ZenWP, transformamos ideas en realidad digital. Descubre la esencia de la excelencia web con nosotros.</p>
            <Link to={'/acerca'}>Sobre Nosotros</Link>
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