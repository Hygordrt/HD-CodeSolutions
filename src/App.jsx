import { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import Processo from './components/Processo';
import Diferenciais from './components/Diferenciais';
import Portfolio from './components/Portfolio';
import Tecnologias from './components/Tecnologias';
import PublicoAlvo from './components/PublicoAlvo';
import CTA from './components/CTA';
import Rodape from './components/Rodape';
import BotaoWhatsApp from './components/BotaoWhatsApp';

/* Componente raiz — monta todas as seções da landing page */
export default function App() {
  /* Inicializa as animações de entrada ao rolar a página */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    /* Observa todos os elementos com classe 'revelar' */
    const elementos = document.querySelectorAll('.revelar');
    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Servicos />
      <Processo />
      <Diferenciais />
      <Portfolio />
      <Tecnologias />
      <PublicoAlvo />
      <CTA />
      <Rodape />
      <BotaoWhatsApp />
    </>
  );
}
