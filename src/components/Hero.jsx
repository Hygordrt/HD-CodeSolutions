import { useEffect, useRef } from 'react';
import './Hero.css';

/* Seção hero principal com fundo de partículas animadas e dashboard mockup */
export default function Hero() {
  const canvasRef = useRef(null);

  /* Animação de partículas no canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particulas = [];
    let animId;

    const redimensionar = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    /* Classe de cada partícula */
    class Particula {
      constructor() { this.reiniciar(); }
      reiniciar() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.raio = Math.random() * 1.4 + 0.4;
        this.opacidade = Math.random() * 0.45 + 0.1;
      }
      atualizar() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      desenhar() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(39,168,255,${this.opacidade})`;
        ctx.fill();
      }
    }

    /* Desenha linhas entre partículas próximas */
    const desenharLinhas = () => {
      for (let i = 0; i < particulas.length; i++) {
        for (let j = i + 1; j < particulas.length; j++) {
          const dx = particulas[i].x - particulas[j].x;
          const dy = particulas[i].y - particulas[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particulas[i].x, particulas[i].y);
            ctx.lineTo(particulas[j].x, particulas[j].y);
            ctx.strokeStyle = `rgba(39,168,255,${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const iniciar = () => {
      particulas = [];
      const quantidade = Math.min(70, Math.floor((canvas.width * canvas.height) / 13000));
      for (let i = 0; i < quantidade; i++) particulas.push(new Particula());
    };

    const animar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particulas.forEach((p) => { p.atualizar(); p.desenhar(); });
      desenharLinhas();
      animId = requestAnimationFrame(animar);
    };

    window.addEventListener('resize', () => { redimensionar(); iniciar(); });
    redimensionar();
    iniciar();
    animar();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', redimensionar);
    };
  }, []);

  /* Anima os contadores numéricos */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting && !entrada.target.dataset.animado) {
            entrada.target.dataset.animado = '1';
            const alvo = parseInt(entrada.target.dataset.contagem);
            let atual = 0;
            const passo = alvo / 120;
            const iv = setInterval(() => {
              atual += passo;
              if (atual >= alvo) { atual = alvo; clearInterval(iv); }
              entrada.target.textContent = Math.floor(atual) + '+';
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-contagem]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkWa = 'https://wa.me/5561993930092?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20um%20sistema.';

  return (
    <section id="inicio" className="hero">
      {/* Canvas das partículas */}
      <canvas ref={canvasRef} className="hero-canvas" />
      {/* Grade de fundo */}
      <div className="hero-grade" />

      <div className="hero-conteudo">
        {/* Texto principal */}
        <div className="hero-texto">
          <div className="hero-badge">
            <span className="ponto-verde" />
            Tecnologia que Transforma Negócios
          </div>

          <h1>
            Transformamos ideias em sistemas que{' '}
            <span className="destaque">geram resultados</span>
          </h1>

          <p>
            Desenvolvemos sistemas personalizados, landing pages e automações
            para empresas que buscam mais produtividade, organização e crescimento.
          </p>

          <div className="hero-botoes">
            <a href={linkWa} className="btn-whatsapp" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp" />
              Falar no WhatsApp
            </a>
            <a href="#servicos" className="btn-outline">
              <i className="fas fa-arrow-right" />
              Ver Serviços
            </a>
          </div>

          {/* Estatísticas animadas */}
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-numero" data-contagem="50">0</div>
              <div className="stat-label">Projetos Entregues</div>
            </div>
            <div className="stat">
              <div className="stat-numero" data-contagem="30">0</div>
              <div className="stat-label">Clientes Ativos</div>
            </div>
            <div className="stat">
              <div className="stat-numero" data-contagem="5">0</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Dashboard mockup flutuante */}
        <div className="hero-visual">
          <div className="dashboard">
            {/* Cabeçalho do dashboard */}
            <div className="dash-header">
              <span className="ponto-win" style={{ background: '#FF5F57' }} />
              <span className="ponto-win" style={{ background: '#FEBC2E' }} />
              <span className="ponto-win" style={{ background: '#28C840' }} />
              <span className="dash-titulo">📊 Dashboard Gerencial</span>
            </div>

            {/* Cards de métricas */}
            <div className="dash-cards">
              <div className="dash-card">
                <div className="dc-label">Receita</div>
                <div className="dc-valor">R$ 48k</div>
                <div className="dc-variacao">↑ +12.5%</div>
              </div>
              <div className="dash-card">
                <div className="dc-label">Clientes</div>
                <div className="dc-valor">1.2k</div>
                <div className="dc-variacao">↑ +8.3%</div>
              </div>
              <div className="dash-card">
                <div className="dc-label">Tarefas</div>
                <div className="dc-valor">94%</div>
                <div className="dc-variacao">↑ Meta</div>
              </div>
            </div>

            {/* Gráfico de barras */}
            <div className="dash-grafico">
              <div className="graf-label">Desempenho Mensal</div>
              <div className="barras">
                {[40, 65, 50, 82, 55, 92, 68, 100, 74, 86, 60, 96].map((h, i) => (
                  <div key={i} className="barra" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* Atividade recente */}
            <div className="dash-atividade">
              <div className="ativ-linha">
                <div className="ativ-ponto" style={{ background: '#27A8FF' }} />
                <div className="ativ-texto">Novo relatório gerado</div>
                <div className="ativ-tempo">2m atrás</div>
              </div>
              <div className="ativ-linha">
                <div className="ativ-ponto" style={{ background: '#00FF88' }} />
                <div className="ativ-texto">Sistema atualizado</div>
                <div className="ativ-tempo">15m atrás</div>
              </div>
              <div className="ativ-linha">
                <div className="ativ-ponto" style={{ background: '#FFB800' }} />
                <div className="ativ-texto">Backup concluído</div>
                <div className="ativ-tempo">1h atrás</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
