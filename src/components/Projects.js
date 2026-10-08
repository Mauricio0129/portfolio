import projects from "../static/projects.json"

const Projects = () => {
    return (
        <div id="projects" className="projects-container">
            <div className="title-header">
                <h3>━━ Projects</h3>
            </div>
            <div className="project-cards-container">
                {projects && projects.map(({ title, description, tags, image, link }) => (
                    <ProjectCard
                        title={title}
                        description={description}
                        tags={tags}
                        image={image}
                        link={link}
                        key={title}
                    />
                ))}
            </div>
        </div>
    )
}

const ProjectCard = ({ title, description, tags, image, link }) => {
    return (
        <div className="project-card">
            <h4 className="mb-3">{title}</h4>
            <p className="mb-4">{description}</p>
            <div className="project-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            {image && (
                <div className="project-image">
                    <img src={process.env.PUBLIC_URL + image} alt={title} />
                </div>
            )}
            {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                    <button>view project</button>
                </a>
            ) : (
                <button disabled>view project</button>
            )}
        </div>
    )
}

export default Projects;
