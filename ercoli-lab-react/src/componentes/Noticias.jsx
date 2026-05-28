export default function Noticias() {
  const listaNoticias = [
    {
      id: 1, 
      imagen: "estilos/News.jpg",
      alt: "Flor Ercoli IGI Interview",
      fecha: "January 2026",
      texto: "Flor Ercoli joined the Innovative Genomics Institute (IGI) as an Investigator. To learn more about Flor’s journey to becoming a scientist, and what excites her about starting her lab, please read her ",
      link: "https://innovativegenomics.org/news/meet-an-igi-scientist-maria-florencia-ercoli/",
      linkTexto: "IGI interview."
    },
    {
      id: 2,
      imagen: "estilos/Nature_comms_news.jpg",
      alt: "Nature Paper",
      fecha: "January 2026",
      texto: "Read more about our recent study published in ",
      link: "https://www.nature.com/articles/s41467-026-68640-9#citeas",
      linkTexto: "Nature Communications."
    }
  ];

  return (
    <div className="noticias-seccion">
      <div className="noticias-titulo">
        <h4>News and Events</h4>
      </div>
      
      <div className="noticias-grid">
        {listaNoticias.map((noticia) => (
          <article className="news-card" key={noticia.id}>
            <div className="news-img-container">
              <img src={noticia.imagen} alt={noticia.alt} />
            </div>
            <div className="news-content">
              <span className="news-date">{noticia.fecha}</span>
              <p>
                {noticia.texto} 
                <a href={noticia.link} target="_blank" rel="noreferrer">
                  {noticia.linkTexto}
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}