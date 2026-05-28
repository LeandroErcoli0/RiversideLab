import TarjetaMiembro from './TarjetaMiembro';

export default function MiembrosEquipo() {
const equipo = [
{
    id: 1,
    imagen: "estilos/Flor.jpg",
    nombre: "Flor Ercoli",
    bandera: "fi-ar",
    rol: "Principal Investigator",
    bio: (
    <p>
        Flor Ercoli is an Assistant Professor in the Department of Botany and Plant Sciences at the University of California, Riverside. She earned her Ph.D. from the Universidad Nacional de Rosario, Argentina, where her research focused on microRNA networks controlling root development in Arabidopsis. She completed her postdoctoral training at the University of California, Davis, in the laboratory of Professor Pamela C. Ronald, where she studied how small peptide hormones regulate rice root architecture and how these developmental changes shape plant–microbe interactions to improve crop productivity and reduce greenhouse gas emissions.
    </p>
    )
},
{
    id: 2,
    imagen: "estilos/Audrey.jpg",
    nombre: "Audrey Adamchak",
    bandera: "fi-us",
    rol: "Junior Specialist",
    bio: (
    <p>
        I am from Davis, CA and I received my undergraduate degree at Dartmouth College in 2023. My primary research interest lies in understanding how plant–microbe interactions can inform and improve ecosystem restoration and land management strategies... I am also passionate about making art, and I have explored many mediums, including painting, collage, and textile art. Recently I have been enamored with using watercolors to paint sunsets, making collages out of found objects, and knitting bags. <a href="http://audreyadamchak.com/" target="_blank" rel="noreferrer">audreyadamchak.com</a>
    </p>
    )
}
];

return (
<>
    <h1 className="team-titulo">Meet Our Team</h1>
    <div className="team-grid">
    {equipo.map((miembro) => (
        <TarjetaMiembro 
        key={miembro.id}
        imagen={miembro.imagen}
        nombre={miembro.nombre}
        bandera={miembro.bandera}
        rol={miembro.rol}
        bio={miembro.bio}
        />
    ))}
    </div>
</>
);
}