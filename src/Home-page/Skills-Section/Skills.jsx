import '/src/Home-page/Skills-Section/skills.css'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'
import { GiBrain } from 'react-icons/gi'

export default function Skills() {
    return (
        <div className="skills-container">
            <div className="skills-header">
                <h3>TECHNICAL SKILLS</h3>
                <h1>My Tech Stack</h1>
                <p>A comprehensive toolkit for building modern web applications and intelligent solutions.</p>
            </div>

            <div className="skills-grid">
                <div className="skills-card">
                    <div className="skills-card-title">
                        <div className="skills-icon">
                            <FaCode size={22} />
                        </div>
                        <h2>Frontend Development</h2>
                    </div>
                    <div className="skills-tags">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>React</span>
                        <span>Next.js</span>
                        <span>Tailwind CSS</span>
                        <span>Responsive Design</span>
                    </div>
                </div>

                <div className="skills-card">
                    <div className="skills-card-title">
                        <div className="skills-icon">
                            <FaServer size={22} />
                        </div>
                        <h2>Backend / Programming</h2>
                    </div>
                    <div className="skills-tags">
                        <span>Python</span>
                        <span>Node.js</span>
                        <span>REST APIs</span>
                        <span>SQL</span>
                        <span>PostgreSQL</span>
                        <span>Express.js</span>
                        <span>FastAPI</span>
                        <span>Java</span>
                    </div>
                </div>

                <div className="skills-card">
                    <div className="skills-card-title">
                        <div className="skills-icon">
                            <GiBrain size={22} />
                        </div>
                        <h2>AI & Automation</h2>
                    </div>
                    <div className="skills-tags">
                        <span>Gemini AI API</span>
                        <span>LangChain</span>
                        <span>Prompt Engineering</span>
                        <span>Chatbot Development</span>
                        <span>AI Integration</span>
                        <span>Workflow Automation</span>
                    </div>
                </div>

                <div className="skills-card">
                    <div className="skills-card-title">
                        <div className="skills-icon">
                            <FaTools size={22} />
                        </div>
                        <h2>Tools & Platforms</h2>
                    </div>
                    <div className="skills-tags">
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>VS Code</span>
                        <span>Vercel</span>
                        <span>Netlify</span>
                        <span>Supabase</span>
                        <span>Figma</span>
                    </div>
                </div>
            </div>
        </div>
    )
}