export default function Publications() {
// Aquí guardamos todas las publicaciones.
// Al envolver el texto en paréntesis (), le decimos a React que es código JSX,
// lo que nos permite usar <strong>, <em> y <a> libremente.
const listaPublicaciones = [
{
    id: 1,
    contenido: (
    <p>
        Shi LD *, Ercoli MF*, Kim J, Teixeira de Araujo Junior A, Estera Molina K, Soni S, Weitz TS, Shigenaga AM, Dukovski I, Sachdeva R, Turumtay H, Louie KB, Bowen BP, Kosina SM, Scheller HV, Pett-Ridge J, Segrè D, Northen TR, Ronald PC and Banfield JF. <a href="https://doi.org/10.1038/s41467-026-68640-9" className="pub-link" target="_blank" rel="noreferrer">“Reduced methane emissions in transgenic rice genotypes are associated with altered rhizosphere microbial hydrogen cycling".</a> Nature Communications (2026)
    </p>
    )
},
{
    id: 2,
    contenido: (
    <p>
        <strong>Ercoli MF</strong>, Shigenaga AM, Teixeira de Araujo Jr A, Jain R, Ronald PC. <a href="https://doi.org/10.1101/2024.02.02.578681" target="_blank" rel="noreferrer" className="pub-link">“Tyrosine-sulfated peptide hormone induces flavonol biosynthesis to control elongation and differentiation in Arabidopsis primary root.”</a> <em>Preprint in bioRxiv</em> (2024).
    </p>
    )
},
{
    id: 3,
    contenido: (
    <p>
        Yimer HZ, Luu DD, Coomer Blundell A, <strong>Ercoli MF</strong>, Vieira P, Williamson VM, Ronald PC, Siddique S. <a href="https://doi.org/10.1073/pnas.2304612120" target="_blank" rel="noreferrer" className="pub-link">“Root-knot nematodes produce functional mimics of tyrosine-sulfated plant peptides”.</a> <em>Proceedings of the National Academy of Sciences</em> (2023).
    </p>
    )
},
{
    id: 4,
    contenido: (
    <p>
        <strong>Ercoli MF*</strong>, Ramos PZ*, Jain R*, Pilotte J, Dong OX, Thompson T, Wells CI, Elkins JM, Edwards AM, Couñago RM, Drewry DH, Ronald PC. <a href="https://doi.org/10.1002/pld3.460" target="_blank" rel="noreferrer" className="pub-link">“An open source plant kinase chemogenomics set”.</a> <em>Plant Direct 6 (11), e460</em> (2022).
    </p>
    )
},
{
    id: 5,
    contenido: (
    <p>
        <strong>Ercoli MF</strong>, Luu DD, Rim EY, Shigenaga A, Teixeira de Araujo Jr A, Chern MS, Jain R, Ruan R, Joe A, Stewart V, Ronald PC. <a href="https://doi.org/10.1073/pnas.2121568119" target="_blank" rel="noreferrer" className="pub-link">“Plant immunity: rice XA21-mediated resistance to bacterial infection”.</a> <em>Proceedings of the National Academy of Sciences</em> 119 (8) (2022).
    </p>
    )
},
{
    id: 6,
    contenido: (
    <p>
        Debernardi JM, Tricoli D, <strong>Ercoli MF</strong>, Hayta S, Ronald PC, Palatnik JF and Dubcovsky J. <a href="https://doi.org/10.1038/s41587-020-0703-0" target="_blank" rel="noreferrer" className="pub-link">“A GRF–GIF chimeric protein improves the regeneration efficiency of transgenic plants”.</a> <em>Nature Biotechnology</em> 38, 1274–1279 (2020).
    </p>
    )
},
{
    id: 7,
    contenido: (
    <p>
        <strong>Ercoli MF</strong>, Vena R, Goldy C, Palatnik JF and Rodríguez RE. <a href="https://doi.org/10.1007/978-1-4939-8772-6_1" target="_blank" rel="noreferrer" className="pub-link">"Analysis of expression gradients of developmental regulators in Arabidopsis thaliana roots".</a> In: Dubrulle J. (eds) <em>Morphogen Gradients. Methods in Molecular Biology</em>, 1863:3-17 (2018).
    </p>
    )
},
{
    id: 8,
    contenido: (
    <p>
        Beltramino M*, <strong>Ercoli MF*</strong>, Debernardi JM*, Goldy C, Rojas AML, Nota F, Alvarez ME, Vercruyssen L, Inzé D, Palatnik JF & Rodríguez RE. <a href="https://doi.org/10.1038/s41598-018-29859-9" target="_blank" rel="noreferrer" className="pub-link">“Robust increase of leaf size by Arabidopsis thaliana GRF3-like transcription factors under different growth conditions”.</a> <em>Scientific Reports</em> 8(1):13447 (2018).
    </p>
    )
},
{
    id: 9,
    contenido: (
    <p>
        <strong>Ercoli MF</strong>, Ferela AF, Debernardi JM, Perrone AP, Rodríguez RE, Palatnik JF. <a href="https://doi.org/10.1105/tpc.17.00856" target="_blank" rel="noreferrer" className="pub-link">“GIF Transcriptional Coregulators Control Root Meristem Homeostasis”.</a> <em>The Plant Cell</em> 30, (2) 347-359 (2018).
    </p>
    )
},
{
    id: 10,
    contenido: (
    <p>
        <strong>Ercoli MF</strong>, Rojas AM, Debernardi JM, Palatnik JF and Rodríguez RE. <a href="https://doi.org/10.1080/15592324.2016.1184809" target="_blank" rel="noreferrer" className="pub-link">“Control of cell proliferation and elongation by miR396”.</a> <em>Plant Signaling & Behavior</em> 11, e1184809 (2016).
    </p>
    )
},
{
    id: 11,
    contenido: (
    <p>
        Rodríguez RE, <strong>Ercoli MF</strong>, Debernardi JM, Breakfield NW, Mecchia MA, Sabatini M, Cools T, De Veylder L, Benfey PN, Palatnik JF. <a href="https://doi.org/10.1105/tpc.15.00452" target="_blank" rel="noreferrer" className="pub-link">“MicroRNA miR396 Regulates the Switch between Stem Cells and Transit-Amplifying Cells in Arabidopsis Roots”.</a> <em>The Plant Cell</em> (27), 3354-3366 (2015).
    </p>
    )
},
{
    id: 12,
    contenido: (
    <p>
        Rodríguez RE, <strong>Ercoli MF</strong>, Debernardi JM, Palatnik JF. <a href="https://doi.org/10.1016/B978-0-12-800854-6.00017-8" target="_blank" rel="noreferrer" className="pub-link">“GROWTH-REGULATING FACTORs, a transcription factor family regulating more than just plant growth".</a> In: <em>"Plant Transcription Factors: Evolutionary, Structural and Functional Aspects"</em>, Academic Press (2016).
    </p>
    )
}
];

return (
<>
    <div className="pub-list-container">
    
    <div className="pub-header">
        <h1>Publications</h1>
        <a href="https://scholar.google.com/citations?user=66EfIs4AAAAJ&hl=en" target="_blank" rel="noreferrer" className="scholar-link">
        <i className="ai ai-google-scholar scholar-icon"></i>
        Peer-reviewed articles
        </a>
    </div>

    <div className="publications-list">
        {/* React dibuja cada <div className="pub-item"> de forma automática */}
        {listaPublicaciones.map((pub) => (
        <div className="pub-item" key={pub.id}>
            {pub.contenido}
        </div>
        ))}
    </div>

    </div>
    
    
</>
);
}