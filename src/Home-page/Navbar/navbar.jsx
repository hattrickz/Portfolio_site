import React, { useState, useEffect } from 'react'
import '/src/Home-page/Navbar/navbar.css'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = () => {
    setOpen(false)
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>

      <NavLink to="/" className="nav-left">
        <img
          src="src/assets/Gemini_Generated_Image_9ytloz9ytloz9ytl-removebg-preview.png"
          alt="logo"
          className="logo-img"
        />
        <span className="logo-text">IY<span>A</span>OBA</span>
      </NavLink>

      <div className="nav-right">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button className="cta-btn" onClick={scrollToContact}>Get in Touch</button>
      </div>

      <div className="menu-icon" onClick={() => setOpen(true)}>
        <FaBars />
      </div>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <NavLink to="/" className="nav-left" onClick={() => setOpen(false)}>
              <img
                src="src/assets/Gemini_Generated_Image_9ytloz9ytloz9ytl-removebg-preview.png"
                alt="logo"
                className="logo-img"
              />
              <span className="logo-text">IY<span>A</span>OBA</span>
            </NavLink>
            <div className="close-icon" onClick={() => setOpen(false)}>
              <FaTimes />
            </div>
          </div>

          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/skills" onClick={() => setOpen(false)}>Skills</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <button className="cta-btn" onClick={scrollToContact}>Get in Touch</button>

        </div>
      )}

    </nav>
  )
}