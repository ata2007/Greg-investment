import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import './style.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import About from "./About"
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import Contact from "./Contact"
import Investment from "./Investment"








createRoot(document.getElementById('root')).render(
   <StrictMode>
        {/* <Row1/>
        <Row2/>
        <Row3/>
        <Row4/>
        <Row5/>
        <Row6/>
         */}
        
  <StrictMode>
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/investment' element={<Investment/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>


  </StrictMode>



   </StrictMode>
)