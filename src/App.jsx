import { Routes, Route } from 'react-router-dom'
import Navbar from './Home-page/Navbar/navbar.jsx'
import Hero from './Home-page/Hero-Section/hero.jsx'
import About from './Home-page/About-Section/about.jsx'
import Skills from './Home-page/Skills-Section/Skills.jsx'
import Services from './Home-page/Services-Section/Services.jsx'
import '/src/App.css'
import Projects from './Home-page/Projects-Section/Projects.jsx'
import Contact from './Home-page/Contact-Section/Contact.jsx'
import Footer from './Home-page/Footer-Section/Footer.jsx'
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}