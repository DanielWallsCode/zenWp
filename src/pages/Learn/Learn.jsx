import Header from "../../components/Header/Header"
import Portada from "../../components/Portada/Portada"
import './Learn.css'


const Learn = () => {
    return (
        <>
            <Header />
            <Portada portada={'/ZEN-WP-APRENDER.png'} />

            <h2 className="subtitle">Libros</h2>

            <div className="recursos">
                <div className="recurso">
                    <div className="recurso-header">
                        <img src="https://assets.lectulandia.com/b/ab/Robert%20Toru%20Kiyosaki/Padre%20rico%20padre%20pobre%20(1)/big.jpg" alt="" />
                    </div>
                    <div className="recurso-body">
                        <h2>Padre Rico Padre Pobre</h2>
                        <p>Basado en el principio de que los bienes que generan ingreso siempre dan mejores resultados que los trabajos tradicionales, Robert Kiyosaki explica cómo pueden adquirirse dichos bienes para, eventualmente, olvidarse de trabajar.</p>
                        <a href="https://wa.me/51948741728">Comprar <span>5 Soles</span></a>
                    </div>
                </div>

                <div className="recurso">
                    <div className="recurso-header">
                        <img src="https://assets.lectulandia.com/b/ab/Niall%20Ferguson/El%20triunfo%20del%20dinero%20(6)/small.jpg" alt="" />
                    </div>
                    <div className="recurso-body">
                        <h2>El triunfo del dinero</h2>
                        <p>Pasta, guita, plata, parné, duros. Da igual cómo lo llamemos, pero lo cierto es que el dinero importa ahora más que nunca.</p>
                        <a href="https://wa.me/51948741728">Comprar <span>5 Soles</span></a>
                    </div>
                </div>


                <div className="recurso">
                    <div className="recurso-header">
                        <img src="https://assets.lectulandia.com/b/ab/James%20Clear/Habitos%20atomicos%20(1)/big.jpg" alt="" />
                    </div>
                    <div className="recurso-body">
                        <h2>Habitos Atomicos</h2>
                        <p>James Clear nos brinda fantásticas ideas basadas en investigaciones científicas, que le permiten revelarnos cómo podemos transformar pequeños hábitos cotidianos para cambiar nuestra vida y mejorarla.</p>
                        <a href="https://wa.me/51948741728">Comprar <span>5 Soles</span></a>
                    </div>
                </div>

                <div className="recurso">
                    <div className="recurso-header">
                        <img src="https://assets.lectulandia.com/b/ab/Robert%20Greene/Las%2048%20leyes%20del%20poder%20(3)/big.jpg" alt="" />
                    </div>
                    <div className="recurso-body">
                        <h2>La 48 leyes del poder</h2>
                        <p>Una guía diseñada para mostrarle al lector cuáles son las cualidades personales que se deben de tener para alcanzar el poder en términos sociológicos</p>
                        <a href="https://wa.me/51948741728">Comprar <span>5 Soles</span></a>
                    </div>
                </div>

                <div className="recurso">
                    <div className="recurso-header">
                        <img src="https://assets.lectulandia.com/b/ab/George%20S%20Clason/El%20hombre%20mas%20rico%20de%20Babilonia%20(1)/big.jpg" alt="" />
                    </div>
                    <div className="recurso-body">
                        <h2>El hombre mas rico de Babilonia</h2>
                        <p>El Hombre más Rico de Babilonia le ofrece con un lenguaje ameno y sencillo, un plan financiero que le llevará al camino de la riqueza. Aprenderá a ganar el dinero que necesita, a conservarlo y a hacerlo fructificar.</p>
                        <a href="https://wa.me/51948741728">Comprar <span>5 Soles</span></a>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default Learn