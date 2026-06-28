import './CTA.css';

/* Seção de chamada para ação */
export default function CTA() {
  const linkWa =
    'https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20um%20sistema.';

  return (
    <section id="contato" className="secao-cta">
      <div className="container">
        <div className="cta-conteudo revelar">
          <div className="badge-secao" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
            <i className="fas fa-comments" /> &nbsp;Vamos Conversar?
          </div>

          <h2 className="cta-titulo">
            Pronto para{' '}
            <span className="destaque">transformar</span>
            {' '}sua empresa?
          </h2>

          <p className="cta-subtitulo">
            Conte sua ideia e receba uma proposta sem compromisso. Nossa
            equipe responde em menos de 24 horas.
          </p>

          <a href={linkWa} className="cta-btn" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp" />
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
