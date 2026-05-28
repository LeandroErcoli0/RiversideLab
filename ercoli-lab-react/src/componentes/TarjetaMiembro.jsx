import { useState } from 'react';

export default function TarjetaMiembro({ imagen, nombre, bandera, rol, bio }) {
const [mostrarBio, setMostrarBio] = useState(false);

return (
<div className="member-card">
    <img src={imagen} alt={`Foto de ${nombre}`} className="member-photo" />
    <div className="member-info">
    <div className="member-header">
        <h3>{nombre} <span className={`fi ${bandera}`}></span></h3>
        
        {bio && (
        <button className="btn-plus" onClick={() => setMostrarBio(!mostrarBio)}>
            {mostrarBio ? '-' : '+'}
        </button>
        )}
    </div>
    <p className="member-role">{rol}</p>
    
    {/* Usamos exactamente tu clase .abierto */}
    {bio && (
        <div className={`member-bio ${mostrarBio ? 'abierto' : ''}`}>
        {bio}
        </div>
    )}
    </div>
</div>
);
}