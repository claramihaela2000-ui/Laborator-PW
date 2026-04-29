const express = require('express');
const app = express();
const PORT = 3000;
// Prima ruta: raspunde la GET /
app.get('/', function(req, res) {
 res.json({ message: 'Serverul functioneaza!' });
});

app.get('/api/projects/:id', function(req, res) {
    const idCautat = parseInt(req.params.id);
    const proiect = projects.find(p => p.id === idCautat);

    if (proiect) {
        res.json(proiect);
    } else {
        res.status(404).json({ error: 'Not found' });
    }
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


// Porneste serverul
app.listen(PORT, function() {
 console.log('Server pornit pe http://localhost:' + PORT);
});
