import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Portada from "../../components/Portada/Portada"
import './About.css'


const AboutPage = () => {
    return (
        <>
            <Header />
            <Portada portada={'/ZEN-WP-ABOUT.png'} />

            <section className="main">
                <div className="sobre-nosotros">
                    <div className="leftContainer">
                        <h2>Sobre Nosotros</h2>
                        <p>En ZenWP, somos un equipo apasionado de profesionales digitales que fusionan la creatividad con la tecnología. Nos dedicamos a convertir visiones en realidades digitales, y cada proyecto es una expresión de nuestro compromiso con la excelencia. Nuestra misión es impulsar tu presencia en línea mediante diseños cautivadores y soluciones innovadoras. Con una combinación única de habilidades y enfoque colaborativo, en ZenWP estamos listos para superar tus expectativas y llevarte al siguiente nivel digital. Conócenos más allá de las palabras, descubre la historia detrás de ZenWP y únete a nosotros en el viaje hacia el éxito digital.</p>
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