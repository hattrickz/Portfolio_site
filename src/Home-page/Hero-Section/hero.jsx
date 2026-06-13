import '/src/Home-page/Hero-Section/hero.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-pdg">

                <div className="hero-left">
                    <div className="online">
                        <span className="dot"></span>
                        <p>Available for Opportunities</p>
                    </div>

                    <div className="hero-text">
                        <h1>
                         Software Engineer <br />
                            <strong>& Product Enthusiast</strong>
                        </h1>
                        <h2>
                            <span>Building </span>user-focused digital solutions through software engineering,<span> product thinking, and continuous learning.</span>
                        </h2>
                    </div>

                    <div className="hero-btn">
                        <button className="btn-primary">View Projects →</button>
                        <button className="btn-secondary">Contact Me</button>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="social-link">
                            <FaGithub size={22} />
                        </a>
                        <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" className="social-link">
                            <FaLinkedin size={22} />
                        </a>
                        <a href="mailto:YOUR_EMAIL@gmail.com" className="social-link">
                            <MdEmail size={22} />
                        </a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-img-wrapper">
                        <div className="hero-img-ring"></div>
                        <img src={'src/assets/WhatsApp Image 2026-06-11 at 16.06.22.jpeg'} alt="Abubakar Oyinlola" />
                    </div>
                </div>

            </div>
        </div>
    )
}