const express = require('express');
const app = express();
const PORT = 3000;


const Project = require('./models/Project');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard')
 .then(function() {
 console.log('Conectat la MongoDB!');
 })
 .catch(function(err) {
 console.error('Eroare conectare MongoDB:', err);
 });

app.use(express.json());

app.get('/api/projects', async function(req, res) {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: 'Eroare ' + err });
    }
});

// Prima ruta: raspunde la GET /
app.get('/', function(req, res) {
 res.json({ message: 'Serverul functioneaza!' });
});

app.get('/api/projects/:id', async function(req, res) {
    try {
        // const idCautat = parseInt(req.params.id);
        const proiect = await Project.findById(req.params.id);
        if (proiect) {
            res.json(proiect);
        } else {
            res.status(404).json({ error: 'Not found' });
        }
    }catch (err) {
        res.status(500).json({ error: 'Eroare ' + err });
    }
    // const idCautat = parseInt(req.params.id);
    // const proiect = projects.find(p => p.id === idCautat);


});

// GET /api/stats — returnează statistici
app.get('/api/stats', function(req, res) {
    const totalProiecte = projects.length;
    const finalizate = projects.filter(p => p.done === true).length;
    const inLucru = projects.filter(p => p.done === false).length;

    res.json({
        total: totalProiecte,
        finalizate: finalizate,
        inLucru: inLucru
    });
});

// Date (temporar in memorie, vom folosi MongoDB mai tarziu)
const projects = [
 { id: 1, title: "Pagina Personala", tech: "HTML, CSS", done: true },
 { id: 2, title: "Calculator Buget", tech: "JS", done: true },
 { id: 3, title: "Dashboard React", tech: "React", done: false },
 { id: 4, title: "API Meteo", tech: "React, API", done: false },
];
// GET /api/projects - returneaza toate proiectele
app.get('/api/projects', function(req, res) {
 res.json(projects);
});


// POST /api/projects - adauga un proiect nou
/* app.post('/api/projects', function(req, res) {
 const newProject = {
 id: projects.length + 1,
 title: req.body.title,
 tech: req.body.tech,
 done: req.body.done || false,
 };
 projects.push(newProject);
 res.status(201).json(newProject);
});
*/

app.post('/api/projects', async function(req, res) {
 try {
 const newProject = new Project({
 title: req.body.title,
 tech: req.body.tech,
 done: req.body.done || false,
 });
 const saved = await newProject.save();
 res.status(201).json(saved);
 } catch (err) {
 res.status(400).json({ error: err.message });
 }
});

// DELETE /api/projects/:id — șterge un proiect după id
/*app.delete('/api/projects/:id', function(req, res) {
    // 1. Luăm id-ul din URL și îl facem număr
    const id = parseInt(req.params.id);
    
    // 2. Găsim unde se află proiectul în listă (indexul)
    const index = projects.findIndex(p => p.id === id);

    // 3. Verificăm dacă l-am găsit
    if (index === -1) {
        // Dacă findIndex returnează -1, înseamnă că nu există
        return res.status(404).json({ error: 'Not found' });
    }

    // 4. Dacă există, îl ștergem din array folosind splice
    projects.splice(index, 1);
    
    // 5. Trimitem un mesaj de confirmare
    res.json({ message: 'Deleted' });
});*/

app.delete('/api/projects/:id', async function(req, res) {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (deletedProject) {
            res.json({ message: 'Deleted' });
        } else {
            res.status(404).json({ error: 'Not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Eroare la ștergere' });
    }
});


// Porneste serverul
app.listen(PORT, function() {
 console.log('Server pornit pe http://localhost:' + PORT);
});



