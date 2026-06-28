import { useEffect } from 'react';

/* Hook que aplica animação de entrada nos elementos com a classe 'revelar'
   ao entrarem na área visível da tela (Intersection Observer) */
export default function useRevelar() {
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

    const elementos = document.querySelectorAll('.revelar');
    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
