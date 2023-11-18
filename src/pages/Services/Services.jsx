import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Portada from "../../components/Portada/Portada"
import './Services.css'

const Services = () => {
    return (
        <>
            <Header />
            <Portada portada={'/ZEN-WP-SERVICES.png'} />

            <section className="main">
                <div className="cards">
                    <div className="card">
                        <div className="card-header">
                            <img src="https://visualtec.host/templates/default/frontend/img/demo-content/images/design.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Diseño Web PYME</h2>
                            <p>Una Cartera permite que se conecte a etherum y administre sus fondos</p>
                            <ul>
                                <li> <span>✅</span> Dominio por un año gratis</li>
                                <li> <span>✅</span> Hosting de 5 gb SSD por un año gratis</li>
                                <li> <span>✅</span> 5 correos corporativos</li>
                                <li> <span>✅</span> 4 pestañas</li>
                                <li> <span>✅</span> Certificado de seguridad SSL</li>
                                <li> <span>✅</span> Botón de whatsapp</li>
                                <li> <span>✅</span> Integración de redes sociales</li>
                                <li> <span>✅</span> Formulario de contacto</li>
                            </ul>
                        </div>

                        <div className="card-footer">
                            <h4>Precio: 70$</h4>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <img src="https://www.desarrolladorweb.co/wp-content/uploads/2021/09/desarrollador-web.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Diseño Web E-Commerce</h2>
                            <p>Una Cartera permite que se conecte a etherum y administre sus fondos</p>
                            <ul>
                                <li> <span>✅</span> Dominio por un año gratis</li>
                                <li> <span>✅</span> Hosting de 5 gb SSD por un año gratis</li>
                                <li> <span>✅</span> 5 correos corporativos</li>
                                <li> <span>✅</span> 4 pestañas</li>
                                <li> <span>✅</span> Certificado de seguridad SSL</li>
                                <li> <span>✅</span> Botón de whatsapp</li>
                                <li> <span>✅</span> Integración de redes sociales</li>
                                <li> <span>✅</span> Formulario de contacto</li>
                            </ul>
                        </div>

                        <div className="card-footer">
                            <h4>Precio: 70$</h4>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Services