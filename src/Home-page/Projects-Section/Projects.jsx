import '/src/Home-page/Projects-Section/projects.css'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        id: 1,
        tag: 'Full Stack Web App',
        title: 'Project One',
        description: 'A full-stack web application with authentication, real-time features, and a clean modern UI. Built to solve real-world problems efficiently.',
        image: null,
        techs: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/YOUR_USERNAME',
        demo: 'https://your-demo-link.com',
    },
    {
        id: 2,
        tag: 'AI & Automation',
        title: 'Project Two',
        description: 'An AI-powered application that automates workflows and delivers intelligent insights using machine learning and natural language processing.',
        image: null,
        techs: ['Python', 'FastAPI', 'OpenAI', 'React'],
        github: 'https://github.com/YOUR_USERNAME',
        demo: 'https://your-demo-link.com',
    },
    {
        id: 3,
        tag: 'Privacy & Security',
        title: 'Project Three',
        description: 'A secure platform focused on privacy, encrypted communication, and data protection for individuals and organizations.',
        image: null,
        techs: ['React', 'Node.js', 'Encryption'],
        github: 'https://github.com/YOUR_USERNAME',
        demo: 'https://your-demo-link.com',
    },
]

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h3>MY WORK</h3>
                <h1>Featured Projects</h1>
                <p>A selection of projects showcasing my expertise in web development, AI integration, and building scalable solutions.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            {project.image ? (
                                <img src={project.image} alt={project.title} />
                            ) : (
                                <div className="project-placeholder">
                                    <span>{project.title}</span>
                                </div>
                            )}
                            <div className="project-tag">{project.tag}</div>
                        </div>

                        <div className="project-body">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>

                            <div className="project-techs">
                                {project.techs.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <FaGithub size={17} /> GitHub
                                </a>
                                <a href={project.demo} target="_blank" rel="noreferrer">
                                    <FiExternalLink size={17} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-footer">
                <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="github-btn">
                    <FaGithub size={20} /> View All Projects on GitHub
                </a>
            </div>
        </div>
    )
}