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
                        <span>Angular</span>
                        <span>Tailwind CSS</span>
                        <span>Redux</span>
                        <span>Responsive Design</span>
                        <span>Hooks</span>
                        <span>ReactStrap</span>
                        <span>BootStrap</span>
                        <span>SVG</span>
                        <span>Canvas</span>

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
                        <span>NestJS</span>
                        <span>Socket.io</span>
                        <span>JSON</span>
                        <span>GraphQL</span>
                        <span>Context API</span>
                        <span>Golang</span>
                    </div>
                </div>

                <div className="skills-card">
                    <div className="skills-card-title">
                        <div className="skills-icon">
                            <GiBrain size={22} />
                        </div>
                        <h2>AI / Automation & Mobile Development</h2>
                    </div>
                    <div className="skills-tags">
                        <span>Gemini AI API</span>
                        <span>LangChain</span>
                        <span>Prompt Engineering</span>
                        <span>Chatbot Development</span>
                        <span>AI Integration</span>
                        <span>Workflow Automation</span>
                        <span>React Native</span>
                        <span>Expo Go</span>
                        <span>React Native CLI </span>
                        <span>Expo Frameworks</span>
                        <span>C++</span>
                        <span>C#</span>
                    </div>
                </div>

                <div className="skills-card">
                    <div className="skills-card-title">
                        <div className="skills-icon">
                            <FaTools size={22} />
                        </div>
                        <h2>DevOps & Tools</h2>
                    </div>
                    <div className="skills-tags">
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>Gitea</span>
                        <span>VS Code</span>
                        <span>Vercel</span>
                        <span>Netlify</span>
                        <span>Supabase</span>
                        <span>IntelliJ</span>
                        <span>Agile</span>
                        <span>Scrum</span>
                        <span>Trello</span>
                        <span>Jest</span>
                        <span>Discord </span>
                        <span>Google Workspaces</span>
                        <span>Jira</span>
                        <span>AWS</span>
                        <span>Babel</span>
                        <span>Azure</span>
                        <span>Yarn</span>
                        <span>Npm</span>
                        <span>UI/UX</span>
                        <span>Webpack</span>
                        <span>Teams</span>
                        <span>Slack</span>
                        <span>Skypee</span>
                        <span>Technical Documentation</span>
                    </div>
                </div>
            </div>
        </div>
    )
}