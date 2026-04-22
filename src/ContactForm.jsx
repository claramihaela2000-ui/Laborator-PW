import { useState } from 'react';

function ContactForm() {
    // 1. Cele 3 state-uri pentru câmpuri (string-uri goale inițial)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // 2. State-ul pentru feedback
    const [feedback, setFeedback] = useState('');

    // 3. Funcția de submit
    function handleSubmit(e) {
        e.preventDefault(); // Prevenim reîncărcarea paginii

        // Verificăm dacă vreun câmp este gol
        if (name === '' || email === '' || message === '') {
            setFeedback('Completeaza toate campurile!');
        } else {
            setFeedback('Multumim, ' + name + '!');
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            {/* Input pentru Name */}
            <input 
                type="text" 
                placeholder="Nume"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />

            {/* Input pentru Email */}
            <input 
                type="email" 
                placeholder="Email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />

            {/* Textarea pentru Message */}
            <textarea 
                placeholder="Mesajul tău"
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            />

            {/* Butonul de Submit */}
            <button type="submit">Trimite</button>

            {/* Afișarea feedback-ului */}
            {feedback && <p><strong>{feedback}</strong></p>}
        </form>
    );
}

export default ContactForm;