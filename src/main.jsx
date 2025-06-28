import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./About"
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import Contact from "./Contact"
import Investment from "./Investment"
import Learnmore from "./Learnmore"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/investment' element={<Investment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/learnmore' element={<Learnmore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)