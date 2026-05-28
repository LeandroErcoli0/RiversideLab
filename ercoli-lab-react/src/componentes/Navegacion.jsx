import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navegacion() {
const [menuAbierto, setMenuAbierto] = useState(false);

const cerrarMenu = () => setMenuAbierto(false);

return (
<>
    <header className="cabecera">
    <div className="branding">
        <img src="estilos/Website_Logo_new_top.png" alt="Logo Ercoli Lab" className="logo-img" />
    </div>
    </header>

    <div className="contenedor-navegacion">
    <div className="nav-contenido">
        
        <button 
        className="menu-btn" 
        id="botonMenu"
        onClick={() => setMenuAbierto(!menuAbierto)}
        >
        <img src="estilos/menu.svg" alt="Menú" />
        </button>

        <nav className={`barra_Nav ${menuAbierto ? 'activo' : ''}`} id="navMenu">
        <Link to="/" onClick={cerrarMenu}>Home</Link>
        <Link to="/team" onClick={cerrarMenu}>Team</Link>
        <Link to="/research" onClick={cerrarMenu}>Research</Link>
        <Link to="/publications" onClick={cerrarMenu}>Publications</Link>
        <Link to="/join" onClick={cerrarMenu}>Join</Link>
        </nav>
        
    </div>
    </div>
</>
);
}