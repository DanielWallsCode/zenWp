import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home"
import AboutPage from './pages/AboutUs/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import Planpage from './pages/planes/Plan'
import Services from './pages/Services/Services'
import NotFound from './pages/NotFound/NotFound'
import Learn from './pages/Learn/Learn'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/acerca' element={<AboutPage/>}/>
        <Route path='/contacto' element={<ContactPage/>}/>
        <Route path='/planes' element={<Planpage/>}/>
        <Route path='/servicios' element={<Services />} />
        <Route path='/aprender' element={<Learn />}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
1