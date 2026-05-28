import TarjetaMiembro from './TarjetaMiembro';

export default function MiembrosHonorarios() {
const honorarios = [
{
    id: 1,
    imagen: "estilos/Emma.jpg",
    nombre: "Princess Emma",
    bandera: "fi-us",
    rol: "Principal Investigator"
},
{
    id: 2,
    imagen: "estilos/Gypsy.jpg",
    nombre: "Gypsy Queen",
    bandera: "fi-us",
    rol: "Principal Investigator"
}
];

return (
<>
    <h1 className="team-titulo">Honorary members</h1>
    <div className="team-grid">
    {honorarios.map((miembro) => (
        <TarjetaMiembro 
        key={miembro.id}
        imagen={miembro.imagen}
        nombre={miembro.nombre}
        bandera={miembro.bandera}
        rol={miembro.rol}
        />
    ))}
    </div>
</>
);
}