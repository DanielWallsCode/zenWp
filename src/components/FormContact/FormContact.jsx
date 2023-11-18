import './FormContact.css'

const FormContact = () => {
    return (
        <div className='contacto'>
            <div className='aside-form'>
                <h4>Contactanos</h4>
                <form action="">
                    <input type="text" name='nombre' placeholder='NOMBRE' />
                    <input type="email" name='correo' placeholder='CORREO' />
                    <input type="text" name='asunto' placeholder='ASUNTO' />
                    <textarea name="mensaje" id="" cols="30" rows="10" placeholder='MENSAJE'></textarea>
                    <button>Enviar Mensaje</button>
                </form>
            </div>

            <div className='text'>
                <img src="https://number8.com/app/uploads/2023/06/5-Programming-Languages-for-Beginners.png" alt="" />
            </div>
        </div>
    )
}

export default FormContact