import { useState, useEffect } from 'react';
import Card from './Card';
function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
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
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Cauta proiect..." 
            />
            <div className="projects-grid">
                {console.log(projects)}
                {projects
                    .filter(function(p) {
                        return p.title.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((project) => (
                        <Card
                            key={project.id}
                            title={project.nume}
                            description={project.descriere}
                            imagine={project.imagine}
                        />
                    ))
                }
            </div>
            <div className="statistics">
                <p>Total proiecte: {projects.length}</p>
                <p>Finalizate: {projects.filter(p => p.done).length}</p>
                <p>In lucru: {projects.filter(p => !p.done).length}</p>
            </div>
        </div>
    );
}
export default ProjectList;