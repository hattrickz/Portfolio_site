import '/src/Home-page/Services-Section/services.css'
import { FaBriefcase, FaGlobe, FaRobot, FaServer, FaCog } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { HiSparkles } from 'react-icons/hi'
import { BsLightningChargeFill } from 'react-icons/bs'

export default function Services() {
    return (
        <div className="services-container">
            <div className="services-header">
                <h3>WHAT I OFFER</h3>
                <h1>Services & Solutions</h1>
                <p>End-to-end web development and AI solutions tailored to help businesses and professionals achieve their goals.</p>
            </div>

            <div className="services-grid-top">
                <div className="service-card">
                    <div className="service-icon">
                        <FaBriefcase size={22} />
                    </div>
                    <h2>Business Websites</h2>
                    <p>Professional, conversion-focused websites that establish your brand's online presence and help you reach more customers.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">
                        <FaGlobe size={22} />
                    </div>
                    <h2>Portfolio Websites</h2>
                    <p>Stunning personal portfolios that showcase your work, skills, and achievements to attract opportunities and clients.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">
                        <MdDashboard size={22} />
                    </div>
                    <h2>Web Applications</h2>
                    <p>Custom web applications tailored to your business needs — from dashboards to e-commerce platforms and booking systems.</p>
                </div>
            </div>

            <div className="services-grid-bottom">
                <div className="service-card service-card--active">
                    <div className="service-icon service-icon--active">
                        <FaRobot size={22} />
                    </div>
                    <h2>AI Chatbots</h2>
                    <p>Intelligent chatbots that automate customer support, answer FAQs, and engage visitors 24/7 — saving you time and resources.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">
                        <HiSparkles size={22} />
                    </div>
                    <h2>AI Integration</h2>
                    <p>Enhance your applications with AI-powered features like content generation, smart recommendations, and data analysis.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">
                        <BsLightningChargeFill size={22} />
                    </div>
                    <h2>Website Optimization</h2>
                    <p>Boost your site's speed, SEO, and performance to improve user experience and search engine rankings.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">
                        <FaServer size={22} />
                    </div>
                    <h2>Hosting & Deployment</h2>
                    <p>Reliable hosting solutions and seamless deployment to keep your website fast, secure, and always online.</p>
                </div>

                <div className="service-card">
                    <div className="service-icon">
                        <FaCog size={22} />
                    </div>
                    <h2>Maintenance & Support</h2>
                    <p>Ongoing website maintenance, updates, and technical support to ensure your site stays current and problem-free.</p>
                </div>
            </div>
        </div>
    )
}