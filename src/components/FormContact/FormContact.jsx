/* eslint-disable no-unused-vars */

import './FormContact.css'
const FormContact = () => {

    return (
        <>

            <div className='bienvenida'>
                <h2>Chatea Con Nosotros</h2>
                <p>Escribenos en whatsApp pulsando el boton de abajo o envianos un correo en el formulario de la pagina!</p>
                <a href="https://wa.me/51948741728">HABLA CON NOSOTROS <img src="https://i.pinimg.com/originals/b7/19/87/b7198771222c74b52116be0f7d18b700.png" alt="" /></a>
                {/* color 1c1cff */}
            </div>

            <div className='contacto'>
                <div className='aside-form'>
                    <h4>Contactanos</h4>
                    <form action="https://formsubmit.co/zenwp.agencia@gmail.com" method="POST">

                        <input
                            type="text"
                            name='nombre'
                            placeholder='NOMBRE'
                        />

                        <input
                            type="email"
                            name='correo'
                            placeholder='CORREO'
                        />

                        <input
                            type="text"
                            name="_subject"
                            placeholder='ASUNTO'
                        />

                        <textarea
                            name="mensaje"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder='MENSAJE'
                        >
                        </textarea>

                        <button type='submit'>Enviar Mensaje</button>
                    </form>
                </div>

                <div className='text'>
                    <img src="https://number8.com/app/uploads/2023/06/5-Programming-Languages-for-Beginners.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default FormContact