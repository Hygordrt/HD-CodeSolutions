import './Servicos.css';

/* Lista de serviços oferecidos pela HD Code Solutions */
const servicos = [
  {
    icone: 'fas fa-laptop-code',
    titulo: 'Sistemas Personalizados',
    descricao:
      'Plataformas configuradas conforme os processos do cliente, desenvolvidas sob medida para atender exatamente às suas necessidades.',
  },
  {
    icone: 'fas fa-globe',
    titulo: 'Landing Pages',
    descricao:
      'Páginas modernas e otimizadas para aumentar conversões e captar mais clientes com design inovador e alta performance.',
  },
  {
    icone: 'fas fa-robot',
    titulo: 'Automação de Processos',
    descricao:
      'Automação de tarefas repetitivas e gestão centralizada das informações para aumentar a produtividade da sua equipe.',
  },
  {
    icone: 'fas fa-chart-line',
    titulo: 'Dashboards Gerenciais',
    descricao:
      'Painéis e indicadores gerenciais em tempo real para acompanhar resultados e tomar decisões estratégicas com segurança.',
  },
  {
    icone: 'fas fa-plug',
    titulo: 'Integrações',
    descricao:
      'Integração entre sistemas, APIs, ERPs e bancos de dados para uma gestão centralizada e eficiente de toda a operação.',
  },
  {
    icone: 'fas fa-headset',
    titulo: 'Suporte e Treinamento',
    descricao:
      'Treinamento das equipes, acompanhamento contínuo após entrega e suporte dedicado para garantir o sucesso do projeto.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="secao-servicos">
      <div className="container">
        <div className="cabecalho-secao">
          <div className="badge-secao revelar">
            <i className="fas fa-cogs" /> Nossos Serviços
          </div>
          <h2 className="titulo-secao revelar">
            O que <span className="destaque">desenvolvemos</span>
          </h2>
          <p className="subtitulo-secao revelar">
            Soluções tecnológicas completas, do planejamento à entrega,
            adaptadas aos processos da sua empresa.
          </p>
        </div>

        <div className="grid-servicos">
          {servicos.map((svc, idx) => (
            <div key={idx} className={`card-servico revelar d${idx}`}>
              <div className="svc-icone">
                <i className={svc.icone} />
              </div>
              <h3 className="svc-titulo">{svc.titulo}</h3>
              <p className="svc-desc">{svc.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
