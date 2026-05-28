export default function Contacto() {
return (
<div className="contacto">
    <div className="contacto-flex">
    <div className="contacto-texto">
        <h4>Contact</h4>
        <p>
        <strong>Ercoli Lab @ the University of California, Riverside</strong><br />
        Department of Botany and Plant Sciences<br />
        Batchelor Hall: Office 2113, Lab 2136<br />
        University of California Riverside, CA 92521<br />
        United States Of America
        </p>
        
        <p>
        <strong>Mail:</strong> <a href="mailto:mariafle@ucr.edu">mariafle@ucr.edu</a>
        </p>
        
        <div className="redes-sociales">
        <p><strong>Follow us:</strong></p>
        <a href="https://bsky.app/profile/mflor-ercoli.bsky.social" target="_blank" rel="noreferrer" className="social-icon bluesky" aria-label="BlueSky">
            <i className="fa-brands fa-bluesky"></i>
        </a>
        <a href="https://www.linkedin.com/in/maria-florencia-ercoli-791978163/" target="_blank" rel="noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
        </a>
        </div>
    </div>
    <div className="contacto-imagen">
        <img src="estilos/UCR_Campus.jpg" alt="Foto de contacto Ercoli Lab" />
    </div>
    </div>
</div>
);
}