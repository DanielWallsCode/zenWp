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
                <h2 className="subtitlte" id="desarrollo">Desarrollo de Paginas Web</h2>
                <div className="cards">
                    <div className="card">
                        <div className="card-header">
                            <img src="https://visualtec.host/templates/default/frontend/img/demo-content/images/design.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Desarrollo de paginas para empresas</h2>
                            <p>Una pagina para tu empresa para impulsar tu negocio con ayuda del mundo digital</p>
                            <ul>
                                <li> <span>✅</span> Dominio por un año gratis</li>
                                <li> <span>✅</span> Hosting sde 5 gb SSD por un año gratis</li>
                                <li> <span>✅</span> 4 pestañas</li>
                                <li> <span>✅</span> Certificado de seguridad SSL</li>
                                <li> <span>✅</span> Botón de whatsapp</li>
                                <li> <span>✅</span> Integración de redes sociales</li>
                                <li> <span>✅</span> Formulario de contacto</li>
                            </ul>
                        </div>

                        <div className="card-footer">
                            <a href="https://wa.me/51948741728"><h4>Precio: 220 Soles</h4></a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <img src="https://www.desarrolladorweb.co/wp-content/uploads/2021/09/desarrollador-web.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Desarrollo de Web E-Commerce</h2>
                            <p>Una tienda en linea para tu emprendimiento o para una tienda de dropshipping</p>
                            <ul>
                                <li> <span>✅</span> Dominio por un año gratis</li>
                                <li> <span>✅</span> Hosting de 5 gb SSD por un año gratis</li>
                                <li> <span>✅</span> 6 pestañas</li>
                                <li> <span>✅</span> Certificado de seguridad SSL</li>
                                <li> <span>✅</span> Botón de whatsapp</li>
                                <li> <span>✅</span> Integracion de pasarela de pagos</li>
                                <li> <span>✅</span> Integración de redes sociales</li>
                                <li> <span>✅</span> Formulario de contacto</li>
                            </ul>
                        </div>

                        <div className="card-footer">
                            <a href="https://wa.me/51948741728"><h4>Precio: 280 Soles</h4></a>
                        </div>
                    </div>
                </div>

                <h2 className="subtitlte" id="marketing">Marketing Digital</h2>

                <div className="cards">
                    <div className="card">
                        <div className="card-header">
                            <img src="https://brainfoodmkt.com/wp-content/uploads/2022/12/agencia-de-marketing-digital-en-cdmx-1024x683.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h2>Publicita tu Negocio</h2>
                            <p>Publicita tu negocio en redes sociales para vender mas y llegar a nuevos clientes</p>
                            <ul>
                                <li> <span>✅</span> Publicidad en instagram y facebook</li>
                                <li> <span>✅</span> Diseños de publicidades para redes sociales</li>
                                <li> <span>✅</span> Posts diarios para la cuenta del negocio</li>
                                <li> <span>✅</span> Estudio de estadiscas de el alcance de las publicidades</li>
                            </ul>
                        </div>

                        <div className="card-footer">
                            <a href="https://wa.me/51948741728"><h4>Precio: 100 Soles</h4></a>
                        </div>
                    </div>

                </div>

            </section>

            <Footer />
        </>
    )
}

export default Services