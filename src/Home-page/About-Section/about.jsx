import '/src/Home-page/About-Section/about.css'
import { SiJavascript, SiPython, SiReact, SiNodedotjs } from 'react-icons/si'
import { FaBrain, FaDatabase } from 'react-icons/fa'

export default function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h3>ABOUT ME</h3>
                <h1>Driven by Curiosity, Focused on Solutions</h1>
                <strong>Transforming ideas into practical digital solutions through technology, product thinking, and continuous learning.</strong>
            </div>

            <div className="about-section-flex">
                <div className="about-text-p">
                    <p>
                        I'm <span>Abubakar Oyinlola Abdulrahman</span>, a <span>Software Engineer</span> passionate about building digital products that solve real-world problems.
                    </p>
                    <p>
                        My interests span <span>software development</span>, <span>artificial intelligence</span>, <span>product management</span>, and emerging technologies. I enjoy turning ideas into practical solutions, learning new technologies, and creating applications that improve how people work, learn, and interact.
                    </p>
                    <p>
                        My background in software engineering has given me a strong foundation in <span>problem-solving</span>, <span>critical thinking</span>, <span>system design</span>, and modern development practices. I continuously explore new tools, frameworks, and technologies to expand my skills and create meaningful impact through technology.
                    </p>
                    <p>
                        I believe the future belongs to <span>builders</span>, <span>innovators</span>, and <span>lifelong learners</span> and I'm committed to being one of them.
                    </p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Download Resume
                    </button>
                </div>

                <div className="about-box-container">
                    <div className="about-box">
                        <div className="about-box-icon">
                            <SiJavascript size={22} color="#09bfd7" />
                        </div>
                        <span>JavaScript / TypeScript</span>
                    </div>
                    <div className="about-box">
                        <div className="about-box-icon">
                            <SiPython size={22} color="#09bfd7" />
                        </div>
                        <span>Python / Java</span>
                    </div>
                    <div className="about-box">
                        <div className="about-box-icon">
                            <SiReact size={22} color="#09bfd7" />
                        </div>
                        <span>React / Next.js</span>
                    </div>
                    <div className="about-box">
                        <div className="about-box-icon">
                            <FaBrain size={22} color="#09bfd7" />
                        </div>
                        <span>AI / Mobile Design</span>
                    </div>
                    <div className="about-box">
                        <div className="about-box-icon">
                            <FaDatabase size={22} color="#09bfd7" />
                        </div>
                        <span>SQL / Databases</span>
                    </div>
                    <div className="about-box">
                        <div className="about-box-icon">
                            <SiNodedotjs size={22} color="#09bfd7" />
                        </div>
                        <span>Node.js / APIs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}