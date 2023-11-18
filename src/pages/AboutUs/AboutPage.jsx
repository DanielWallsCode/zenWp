import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Portada from "../../components/Portada/Portada"
import './About.css'


const AboutPage = () => {
    return (
        <>
            <Header />
            <Portada portada={'https://ethereum.org/static/09e380704886412222a4bf3755787be6/72aca/developers-hub-hero.webp'} />

            <section className="main">
                <div className="sobre-nosotros">
                    <div className="leftContainer">
                        <h2>Sobre Nosotros</h2>
                        <p>ethereum.org está aquí para ayudarle a desarrollar con Ethereum gracias a documentación sobre conceptos fundamentales, así como sobre la pila de desarrollo. Además, dispone de tutoriales para ayudarle a ponerse en marcha. <br /> Con la inspiración de Mozilla Developer Network, pensamos que Ethereum necesitaba un lugar donde albergar el mejor contenido y los más destacados recursos para desarrolladores. Al igual que en el caso de nuestros amigos de Mozilla, todo aquí es de código abierto y disponible para que lo pueda ampliar y mejorar. Si tiene algún comentario, póngase en contacto con nosotros creando una incidencia de GitHub o accediendo a nuestro servidor de Discord. Unirse a Discord(opens in a new tab)</p>
                    </div>

                    <div className="rightContainer">
                        <img src="https://ethereum.org/static/810eb64d89629231aa4d8c7fe5f20ee5/d5009/developers-eth-blocks.webp" alt="" />
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default AboutPage