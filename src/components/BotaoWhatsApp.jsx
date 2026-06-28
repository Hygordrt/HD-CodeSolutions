import './BotaoWhatsApp.css';

/* Botão flutuante do WhatsApp sempre visível no canto inferior direito */
export default function BotaoWhatsApp() {
  const linkWa =
    'https://wa.me/5561993930092?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20um%20sistema.';

  return (
    <div className="wa-flutuante">
      <a href={linkWa} className="wa-btn" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp" />
        <span>Falar no WhatsApp</span>
      </a>
    </div>
  );
}
