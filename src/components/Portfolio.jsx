import './Portfolio.css';

/* Exemplos de projetos desenvolvidos (mockups visuais) */
const projetos = [
  { titulo: 'Dashboard Gerencial', subtitulo: 'Indicadores em tempo real', tipo: 'dashboard' },
  { titulo: 'Sistema Financeiro', subtitulo: 'Controle de receitas e despesas', tipo: 'financeiro' },
  { titulo: 'Sistema de Atendimento', subtitulo: 'CRM e gestão de tickets', tipo: 'atendimento' },
  { titulo: 'Portal Corporativo', subtitulo: 'Intranet e gestão de equipes', tipo: 'portal' },
  { titulo: 'Aplicativo Mobile', subtitulo: 'App iOS e Android', tipo: 'mobile' },
  { titulo: 'Landing Page', subtitulo: 'Alta conversão e design moderno', tipo: 'landing' },
];

/* Cabeçalho padrão de janela com pontos coloridos */
function CabecalhoMock({ titulo }) {
  return (
    <div className="mock-header">
      <div className="mock-dots">
        <div className="mock-dot" style={{ background: '#FF5F57' }} />
        <div className="mock-dot" style={{ background: '#FEBC2E' }} />
        <div className="mock-dot" style={{ background: '#28C840' }} />
      </div>
      <span className="mock-label">{titulo}</span>
    </div>
  );
}

/* Mockup visual do dashboard */
function MockDashboard() {
  return (
    <div className="mock-body">
      <div className="mock-grid-2">
        <div className="mock-chart-bars">
          {[40, 70, 55, 90, 65].map((h, i) => (
            <div key={i} className="mock-barra" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mock-linhas">
          <div className="mock-linha w" /><div className="mock-linha m" />
          <div className="mock-linha s accent" /><div className="mock-linha w" />
        </div>
      </div>
      <div className="mock-grid-3">
        {['#27A8FF', '#00FF88', '#FFB800'].map((cor, i) => (
          <div key={i} className="mock-kpi">
            <div className="mock-kpi-label" />
            <div className="mock-kpi-valor" style={{ background: cor + '99' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Mockup do sistema financeiro */
function MockFinanceiro() {
  return (
    <div className="mock-body" style={{ gap: '0.35rem' }}>
      <div className="mock-row-flex">
        <div className="mock-metric verde" />
        <div className="mock-metric vermelho" />
      </div>
      <div className="mock-tabela">
        <div className="mock-tab-title" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="mock-tab-row">
            <div className="mock-tab-dot" />
            <div className="mock-tab-line flex1" />
            <div className={`mock-tab-line w25 ${i % 2 === 0 ? 'vermelho' : 'verde'}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Mockup do CRM */
function MockAtendimento() {
  return (
    <div className="mock-body-row">
      <div className="mock-sidebar">
        <div className="mock-sidebar-ativo" />
        <div className="mock-sidebar-item" />
      </div>
      <div className="mock-chat">
        <div className="mock-chat-title" />
        <div className="mock-chat-msg" />
        <div className="mock-chat-msg m" />
        <div className="mock-chat-msg s" />
        <div className="mock-chat-send" />
      </div>
    </div>
  );
}

/* Mockup do portal corporativo */
function MockPortal() {
  return (
    <div className="mock-body">
      <div className="mock-nav-bar">
        <div className="mock-nav-item destaque" />
        <div className="mock-nav-item" /><div className="mock-nav-item" />
        <div className="mock-nav-cta" />
      </div>
      <div className="mock-grid-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mock-card-portal">
            <div className="mock-portal-img" />
            <div className="mock-linha w" style={{ height: 4 }} />
            <div className="mock-linha m" style={{ height: 4 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Mockup do app mobile */
function MockMobile() {
  return (
    <div className="mock-body-mobile">
      <div className="mock-phone">
        <div className="mock-phone-header" />
        <div className="mock-phone-card" />
        <div className="mock-phone-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="mock-phone-tile" />
          ))}
        </div>
        <div className="mock-phone-footer" />
      </div>
      <div className="mock-phone-desc">
        <div className="mock-linha accent" style={{ height: 5, width: '60%' }} />
        <div className="mock-linha" style={{ height: 3, width: '90%', background: 'rgba(255,255,255,.14)' }} />
        <div className="mock-linha" style={{ height: 3, width: '75%', background: 'rgba(255,255,255,.1)' }} />
        <div className="mock-phone-btn" />
      </div>
    </div>
  );
}

/* Mockup de landing page */
function MockLanding() {
  return (
    <div className="mock-body" style={{ padding: '0.5rem', gap: '0.38rem' }}>
      <div className="mock-hero-lp">
        <div className="mock-linha" style={{ height: 5, width: '68%', background: 'rgba(255,255,255,.4)' }} />
        <div className="mock-linha" style={{ height: 3, width: '88%', background: 'rgba(255,255,255,.2)' }} />
        <div className="mock-lp-btn" />
      </div>
      <div className="mock-grid-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mock-feature">
            <div className="mock-linha accent" style={{ height: 3, width: '60%' }} />
            <div className="mock-linha" style={{ height: 3, width: '80%', background: 'rgba(255,255,255,.14)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Mapa de componentes por tipo de projeto */
const mockups = {
  dashboard: MockDashboard,
  financeiro: MockFinanceiro,
  atendimento: MockAtendimento,
  portal: MockPortal,
  mobile: MockMobile,
  landing: MockLanding,
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="secao-portfolio">
      <div className="container">
        <div className="cabecalho-secao">
          <div className="badge-secao revelar">
            <i className="fas fa-th-large" /> Portfólio
          </div>
          <h2 className="titulo-secao revelar">
            Alguns <span className="destaque">exemplos</span>
          </h2>
          <p className="subtitulo-secao revelar">
            Tipos de soluções que desenvolvemos para nossos clientes em
            diferentes segmentos.
          </p>
        </div>

        <div className="grid-portfolio">
          {projetos.map((proj, idx) => {
            const MockComponent = mockups[proj.tipo];
            return (
              <div key={idx} className={`item-portfolio revelar d${idx}`}>
                <div className="portfolio-mock">
                  <CabecalhoMock titulo={proj.titulo} />
                  <MockComponent />
                </div>
                {/* Overlay com título ao passar o mouse */}
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{proj.titulo}</h3>
                    <p>{proj.subtitulo}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
