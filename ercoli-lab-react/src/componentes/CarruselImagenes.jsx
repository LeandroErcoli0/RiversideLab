import { useState, useEffect } from 'react';

export default function CarruselImagenes({ imagenes }) {
const [indiceActual, setIndiceActual] = useState(0);

// useEffect se encarga de cambiar la foto automáticamente cada 3 segundos
useEffect(() => {
const temporizador = setInterval(() => {
    setIndiceActual((indiceAnterior) => 
    // Si llegamos a la última foto, volvemos a la 0. Si no, sumamos 1.
    indiceAnterior === imagenes.length - 1 ? 0 : indiceAnterior + 1
    );
}, 3000); 

// Esta es una regla de oro en React: siempre debemos limpiar el temporizador
// cuando salimos de la página para que no siga consumiendo memoria.
return () => clearInterval(temporizador);
}, [imagenes.length]);

return (
<div className="slideshow-container">
    {imagenes.map((imagen, index) => (
    <div 
        key={index} 
        className="mySlides zoom"
        // Usamos estilos en línea para mostrar solo la foto que coincide con el índice actual
        style={{ display: index === indiceActual ? 'block' : 'none' }}
    >
        <img src={imagen.src} alt={imagen.alt} style={{ width: '100%' }} />
    </div>
    ))}
</div>
);
}