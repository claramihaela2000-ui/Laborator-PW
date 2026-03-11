// Validare Formular
const form = document.querySelector('#contact-form');
const feedback = document.getElementById('feedback-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nume = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("message").value;

    if (nume.length < 2) {
        feedback.textContent = "Numele trebuie să aibă cel puțin 2 caractere.";
        feedback.style.color = "red";
    } else if (!email.includes('@')) {
        feedback.textContent = "Email-ul trebuie să conțină @.";
        feedback.style.color = "red";
    } else if (mesaj.length < 10) {
        feedback.textContent = "Mesajul trebuie să aibă cel puțin 10 caractere.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Formular trimis cu succes!";
        feedback.style.color = "green";
        form.reset(); 
    }
});

// Dark Mode - Codul care dădea eroare
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

const sectiuniTitlu = document.querySelectorAll('main h2');

sectiuniTitlu.forEach(function(titlu) {
    titlu.addEventListener('click', function() {
        const continut = this.nextElementSibling;
        if (continut) {
            continut.classList.toggle('hidden');
            this.classList.toggle('collapsed');
        }
    });
});