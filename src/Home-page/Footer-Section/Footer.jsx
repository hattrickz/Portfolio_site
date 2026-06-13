import '/src/Home-page/Footer-Section/footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <NavLink to="/" className="footer-logo">
                    <img
                        src="src/assets/Gemini_Generated_Image_9ytloz9ytloz9ytl-removebg-preview.png"
                        alt="logo"
                        className="footer-logo-img"
                    />
                    <span className="footer-logo-text">IY<span>A</span>OBA</span>
                </NavLink>
            </div>

            <div className="footer-socials">
                <a href="https://github.com/hattrickz" target="_blank" rel="noreferrer" className="footer-social-link">
                    <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/hattrickz" target="_blank" rel="noreferrer" className="footer-social-link">
                    <FaLinkedin size={20} />
                </a>
                <a href="mailto:hattrickjr096@gmail.com" className="footer-social-link">
                    <MdEmail size={20} />
                </a>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Abubakar Abdulrahman. All rights reserved.</p>
            </div>
        </footer>
    )
}