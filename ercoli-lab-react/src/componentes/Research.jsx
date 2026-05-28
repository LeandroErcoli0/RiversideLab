import CarruselImagenes from './CarruselImagenes';

export default function Research() {
// Guardamos las imágenes aquí. Si mañana agregas una foto 04, solo la sumas a esta lista.
const fotosInvestigacion = [
{ src: "estilos/Research_Picarro_01.jpg", alt: "Lab Work" },
{ src: "estilos/Picarro_2_replace.jpg", alt: "Rice Plants" },
{ src: "estilos/Research_Picarro_03.jpg", alt: "Microscope" }
];

return (
<>
    <div className="Imagen research-banner">
    <img src="estilos/Research_picture_top.jpg" alt="Rice plants research" style={{ width: '100%' }} />
    </div>

    <div className="texto research-texto">
    <p className="intro">
        The Ercoli lab studies how plants influence soil microbial communities through root-derived chemistry 
        and how these interactions can be used to promote sustainable agriculture.
    </p>

    <p>
        By integrating approaches from <strong>plant genetics, developmental biology, and soil microbiome ecology</strong>, 
        our work connects specific plant traits with microbiome functions. We aim to characterize the genetic 
        and biochemical pathways that regulate root development and exudate composition, and how variation 
        in root chemistry affects microbial community assembly and activity in soil.
    </p>

    <p>
        The long-term goal of our research is to generate fundamental, mechanistic knowledge that enhances 
        our ability to predict and manage plant–microbe interactions in agricultural systems. This framework 
        will guide strategies to harness beneficial microbes to promote food security and long-term ecosystem resilience.
    </p>
    </div>

    <div className="publications-slides">
    <div className="media-container">
        
        <CarruselImagenes imagenes={fotosInvestigacion} />
        
        <p className="epigrafe">Controlled greenhouse experiment and methane flux measurements.</p>
    </div>
    
    <div className="publication-texto">
        <h3>Engineering Rice–Microbial Associations to Regulate Carbon Cycling in Anaerobic Soils.</h3>
        <p>
        Rice paddies are highly dynamic and predominantly anaerobic ecosystems and represent one of the largest agricultural sources of atmospheric methane (CH₄), a potent greenhouse gas. Because this biogeochemical landscape has coevolved with Oryza species over millions of years, both rice plants and their associated microbial communities have developed strategies to cope with fluctuating oxygen availability.
        </p>
        <p>
        Rice roots develop aerenchyma, gas-filled spaces that facilitate oxygen transport from shoots to roots, and release a chemically diverse array of root-derived compounds into the soil, together creating complex redox dynamics in the rhizosphere.
        </p>
        <p>
        We seek to understand how mechanisms controlling rice root development and exudate composition regulate the regeneration of alternative electron acceptors in rice paddies, thereby modulating electron flow and carbon cycling in anaerobic soils.
        </p>
    </div>
    </div>

</>
);
}