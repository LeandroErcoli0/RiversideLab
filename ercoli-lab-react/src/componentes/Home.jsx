import Contacto from './Contacto'
import Noticias from './Noticias';
export default function Home() {
return (
    <>
        <div className="info_conteiner">
            <div className="titulo-contenedor">
                <figure className="intro-imagen">
                    <img src="estilos/rice fields aerial 07-25-2024_(c) Brian Baer.jpg" alt="Uncovering" />
                    <div className="contenedor-texto">
                        <p className="p1">Ercoli Lab</p>
                        <p className="p2">Uncovering how plant roots program soil microbiome function</p>
                    </div>
                    <figcaption> 
                        <a href="https://www.ucdavis.edu/food/news/california-rice-and-wildlife-report-released">
                            Rice fields in California - from California Rice and Wildlife Report Released,UC Davis. ph: Brian Baer.
                        </a> 
                    </figcaption>
                </figure>
                <br />
                <div className="titulo-texto">
                    <p>One of the greatest challenges of our time is feeding a growing global population while reducing the negative impacts of agriculture on the environment. Microbiome-assisted agricultural innovations offer powerful new opportunities to enhance plant productivity, soil health, and ecosystem resilience, yet our ability to harness these systems remains limited by an incomplete mechanistic understanding of how plants shape their associated microbiomes.</p><br />
                    <p>While soil properties and environmental conditions influence microbiome assembly, plants exert strong selective pressure through genotype-specific mechanisms involving root development, immune responses, and the spatial and temporal release of root exudates. These exudates represent major pools of photosynthetically fixed carbon and serve as key resources that regulate microbial community composition and function in the rhizosphere, a highly dynamic hotspot of nutrient exchange, competition, and cooperation. Although root-associated microbiomes have been extensively characterized, the pathways through which plants control carbon flow belowground and thereby program microbial community structure, function, and persistence remain poorly understood.</p><br />
                    <p>The Ercoli Lab addresses this knowledge gap by uncovering the genetic and biochemical mechanisms through which plant roots regulate soil microbiome function, with the goal of enabling more predictive and sustainable approaches to agriculture.</p>
                </div>
            </div>
            <br />
            
            <Noticias/>
        </div>
        <Contacto/>
    </>
);
}