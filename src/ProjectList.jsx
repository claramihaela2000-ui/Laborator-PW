import { useState, useEffect } from 'react';
function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(function () {
        fetch('/Data/projects.json')
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
                setProjects(data.projects);
                setLoading(false);
            })
            .catch(function (err) {
                setError('Eroare la incarcarea datelor');
                setLoading(false);
            })
    }, []);
    if (loading) {
        return <p>Se incarca...</p>;
    }
    return (
        <div className="project-list-container">
            <h2>Proiecte</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        titlu={project.nume}
                        descriere={project.descriere}
                        imagine={project.imagine}
                    />
                ))}
            </div>
        </div>
    );
}
export default ProjectList;