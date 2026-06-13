import '/src/Home-page/Contact-Section/contact.css'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { FiLinkedin } from "react-icons/fi";
import { IoSend } from 'react-icons/io5'
import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <div className="contact-container" id="contact">
            <div className="contact-header">
                <h3>LET'S CONNECT</h3>
                <h1>Start a Conversation</h1>
                <p>Whether you're looking for a new website, exploring AI solutions, or seeking a collaboration — I'm here to help. Reach out for projects, partnerships, or job opportunities.</p>
            </div>

            <div className="contact-body">

                {/* LEFT */}
                <div className="contact-left">
                    <h2>Get in Touch</h2>
                    <p className="contact-sub">Prefer a direct conversation? Reach out through any of these channels.</p>

                    <div className="contact-channels">
                        <a href="mailto:hattrickjr096@gmail.com" className="contact-channel">
                            <div className="channel-icon">
                                <MdEmail size={22} />
                            </div>
                            <div className="channel-info">
                                <span className="channel-title">YOUR_EMAIL@gmail.com</span>
                                <span className="channel-sub">Best for project inquiries</span>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/hattrickz" target="_blank" rel="noreferrer" className="contact-channel">
                            <div className="channel-icon channel-icon--active">
                                <FiLinkedin size={22} />
                            </div>
                            <div className="channel-info">
                                <span className="channel-title channel-title--cyan">Connect with me</span>
                                <span className="channel-sub">For collaborations & opportunities</span>
                            </div>
                        </a>

                        <a href="https://github.com/hattrickz" target="_blank" rel="noreferrer" className="contact-channel">
                            <div className="channel-icon">
                                <FaGithub size={22} />
                            </div>
                            <div className="channel-info">
                                <span className="channel-title">@hattrickz</span>
                                <span className="channel-sub">View my code & projects</span>
                            </div>
                        </a>
                    </div>

                    <div className="contact-opportunity">
                        <h3>Open to Opportunities</h3>
                        <p>I'm available for freelance projects, collaborations, and full-time opportunities. Let's create something impactful together.</p>
                        <a href="mailto:hattrickj096@gmail.com" className="opportunity-btn">
                            <MdEmail size={18} /> Get in Touch
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="contact-right">
                    <div className="contact-form-card">
                        <h2>Send a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={6}
                                    required
                                />
                            </div>
                            <button type="submit" className="send-btn">
                                {sent ? 'Message Sent! ✓' : <><IoSend size={17} /> Send Message</>}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}