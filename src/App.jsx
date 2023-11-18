import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home"
import AboutPage from './pages/AboutUs/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import Planpage from './pages/planes/Plan'
import Services from './pages/Services/Services'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/planes' element={<Planpage/>}/>
        <Route path='/servicios' element={<Services />} />
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
1