import { Link } from 'react-router';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 — Pagina nu există</h1>
      <p>Ups! Pagina pe care o cauți a dispărut sau nu a existat niciodată.</p>
      
      {/* Link-ul care te trimite înapoi la pagina principală */}
      <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Mergi înapoi la Home
      </Link>
    </div>
  );
}

export default NotFound;