import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import './Contact.css'
import Portada from "../../components/Portada/Portada"
import FormContact from "../../components/FormContact/FormContact"


const ContactPage = () => {
  return (
    <div>
      <Header />
      <Portada portada={'https://ethereum.org/static/3fb3be63b1a2ed5a6fd41a8e7e50054f/72aca/learn-hub-hero.webp'}/>

      <FormContact />
      <Footer />
    </div>
  )
}

export default ContactPage