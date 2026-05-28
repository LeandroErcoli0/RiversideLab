export default function Join() {
// Separamos los datos de las becas para que sea facilísimo agregar nuevas
const becasPhD = [
{ id: 1, nombre: "DOE Office of Science Graduate Student Research (SCGSR) Program", link: "http://science.energy.gov/wdts/scgsr/" },
{ id: 2, nombre: "Switzer Fellowship", link: "https://www.switzernetwork.org/grant-programs-overview" },
{ id: 3, nombre: "USDA/NIFA Predoctoral/Postdoctoral Fellowships Grant Program", link: "https://www.nifa.usda.gov/grants/funding-opportunities/agriculture-food-research-initiative-education-workforce-development" },
{ id: 4, nombre: "Global Rice Science Scholarship", link: "https://ricefound.org" },
{ id: 5, nombre: "Beachell-Borlaug International Scholars Program", link: "http://www.monsantoglobal.com/global/za-en/whoweare/pages/beachell-borlaug-international-scholars-program.aspx" },
{ id: 6, nombre: "NSF Graduate Research Fellowship Program (GRFP)", link: "https://www.nsf.gov/funding/opportunities/grfp-nsf-graduate-research-fellowship-program/nsf25-547/solicitation" },
{ id: 7, nombre: "Additional Graduate Student Funding Opportunities", link: "https://research.jhu.edu/rdt/funding-opportunities/graduate/" }
];

const becasPostdoc = [
{ id: 1, nombre: "NSF Postdoctoral Fellowship in Biology", link: "http://www.nsf.gov/funding/pgm_summ.jsp?pims_id=503622" },
{ id: 2, nombre: "NIFA Postdoctoral Fellowship", link: "https://www.nifa.usda.gov/grants/funding-opportunities/agriculture-food-research-initiative-education-workforce-development" },
{ id: 3, nombre: "Schmidt Science fellows (Apply in advance!)", link: "https://schmidtsciencefellows.org" },
{ id: 4, nombre: "University of California President's Postdoctoral Fellowship Program", link: "http://ppfp.ucop.edu/info/" },
{ id: 5, nombre: "The Life Sciences Research Foundation", link: "http://www.lsrf.org/" },
{ id: 6, nombre: "DOE Computational Science Graduate Fellowship", link: "https://www.krellinst.org/csgf/" },
{ id: 7, nombre: "NIH individual postdoctoral Fellowships (F32)", link: "https://www.niehs.nih.gov/research/supported/training/fellowships/f32" },
{ id: 8, nombre: "L'Oreal USA Fellowships for Women in Science program", link: "https://www.loreal.com/en/usa/pages/group/fwis/" },
{ id: 9, nombre: "Binational Agricultural Research and Development Fund", link: "http://www.bard-isus.com/" },
{ id: 10, nombre: "Human Frontier Science Program (HSFP)", link: "http://www.hfsp.org/" },
{ id: 11, nombre: "Helen Hay Whitney Foundation", link: "http://hhwf.org/research-fellowship/" },
{ id: 12, nombre: "Gordon and Betty Moore Foundation", link: "https://www.moore.org/grants" },
{ id: 13, nombre: "Japanese Society for the Promotion of Scientists", link: "http://www.jsps.go.jp/english/programs/index.html" },
{ id: 14, nombre: "Pew Latin America fellows", link: "https://www.pew.org/en/search?q=Pew+Latin+American+Fellows" },
{ id: 15, nombre: "More opportunities", link: "https://research.jhu.edu/rdt/funding-opportunities/postdoctoral/" }
];

return (
<>
    <div className="join-intro-section">
    <h1 className="main-join-title">The Ercoli Lab opened at UC Riverside in January 2026, come work with us!</h1>
    <p className="mission-text">
        We are building an inclusive, collaborative research group focused on plant genetics, metabolomics, 
        and plant–microbe interactions. We strive to create a lab environment where everyone feels welcome, 
        supported, safe, and excited to ask ambitious scientific questions.
    </p>
    </div>
    
    <div className="Bloque2">
    <div className="apply-block">
        <h2>How to Apply</h2>
        <p>If you are interested in joining the lab, please email Flor at <a href="mailto:mariafle@ucr.edu" className="email-link">mariafle@ucr.edu</a> with:</p>
        <ul className="requirements-list">
        <li>A brief description of why you are interested in the Ercoli Lab and UC Riverside.</li>
        <li>What research questions are you most excited to pursue?</li>
        <li>Why are you interested in Ph.D. or postdoctoral training, and how does this training align with your career goals?</li>
        <li>Any additional information you feel is relevant about your background or experiences.</li>
        <li>A current CV.</li>
        </ul>
    </div>
    
    <div className="roles-block">
        <div className="role-item">
        <h3>Undergraduate Researchers</h3>
        <p>We are always excited to host undergraduate researchers in the lab. Students at any stage are encouraged to reach out.</p>
        </div>
        
        <div className="role-item">
        <h3>Graduate Students</h3>
        <p>The lab accepts graduate students through the <a href="https://plantbiology.ucr.edu/graduate-program" target="_blank" rel="noreferrer" className="text-link">Plant Biology Graduate Program</a>.</p>
        <p>We anticipate recruiting one/two graduate students for Fall 2026/7.</p>
        </div>
        
        <div className="role-item">
        <h3>Postdoctoral Researchers</h3>
        <p>A Postdoctoral position will be opening soon. More information will be posted by July 2026.</p>
        </div>
    </div>
    <br />
    </div>

    <div className="funding-section">
    <div className="funding-content">
        <h2>Fellowships &amp; Funding Opportunities</h2>
        <p className="funding-intro">Flor is happy to work closely with prospective graduate students and postdocs to develop competitive proposals for external funding.</p>
        
        <div className="funding-columns">
        <div className="funding-col">
            <h3>Ph.D. Training Grants</h3>
            <ul className="funding-list">
            {/* Mapeamos la lista de becas PhD */}
            {becasPhD.map(beca => (
                <li key={beca.id}>
                <a href={beca.link} target="_blank" rel="noreferrer">{beca.nombre}</a>
                </li>
            ))}
            </ul>
        </div>

        <div className="funding-col">
            <h3>Postdoctoral Fellowship Opportunities</h3>
            <ul className="funding-list">
            {/* Mapeamos la lista de becas Postdoc */}
            {becasPostdoc.map(beca => (
                <li key={beca.id}>
                <a href={beca.link} target="_blank" rel="noreferrer">{beca.nombre}</a>
                </li>
            ))}
            </ul>
        </div>
        </div>
    </div>
    </div>


</>
);
}