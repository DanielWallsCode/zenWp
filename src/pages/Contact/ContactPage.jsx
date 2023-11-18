import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import './Contact.css'
import Portada from "../../components/Portada/Portada"
import FormContact from "../../components/FormContact/FormContact"


const ContactPage = () => {
  return (
    <div>
      <Header />
      <Portada portada={'/ZEN-WP-CONTACTO.png'}/>

      <FormContact />
      <Footer />
    </div>
  )
}

export default ContactPage