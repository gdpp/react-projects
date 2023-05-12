import { Link, useParams } from 'react-router-dom';

const SingleProject = () => {
    console.log(useParams());
    const { projectId } = useParams();

    return (
        <section className="section">
            <h3>SingleProject</h3>
            <p>{projectId}</p>
            <Link to="/portfolio/projects">Back To Projects</Link>
        </section>
    );
};

export default SingleProject;
