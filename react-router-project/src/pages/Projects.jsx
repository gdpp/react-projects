import { Link } from 'react-router-dom';
import projects from '../data';

const Projects = () => {
    return (
        <section className="section">
            <h3>Projects</h3>
            <div className="products">
                {projects.map((project) => {
                    return (
                        <article key={project.id}>
                            <h5>{project.name}</h5>
                            <Link to={`projects/${project.id}`}>
                                Read more...
                            </Link>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
