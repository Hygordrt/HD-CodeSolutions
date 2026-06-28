import './Tecnologias.css';

/* Lista de tecnologias utilizadas */
const tecnologias = [
  { icone: 'fab fa-react', nome: 'React' },
  { icone: 'fab fa-node-js', nome: 'Node.js' },
  { icone: 'fab fa-microsoft', nome: '.NET' },
  { icone: 'fab fa-python', nome: 'Python' },
  { icone: 'fas fa-database', nome: 'PostgreSQL' },
  { icone: 'fas fa-server', nome: 'SQL Server' },
  { icone: 'fab fa-docker', nome: 'Docker' },
  { icone: 'fab fa-aws', nome: 'AWS' },
  { icone: 'fab fa-microsoft', nome: 'Azure' },
  { icone: 'fas fa-chart-bar', nome: 'Power BI' },
  { icone: 'fas fa-exchange-alt', nome: 'APIs REST' },
  { icone: 'fab fa-js-square', nome: 'TypeScript' },
];

export default function Tecnologias() {
  /* Duplica a lista para criar o efeito de scroll infinito */
  const listaCompleta = [...tecnologias, ...tecnologias];

  return (
    <section id="tecnologias" className="secao-tecnologias">
      <div className="container">
        <div className="cabecalho-secao">
          <div className="badge-secao revelar">
            <i className="fas fa-code" /> Stack
          </div>
          <h2 className="titulo-secao revelar">
            Tecnologias que <span className="destaque">utilizamos</span>
          </h2>
          <p className="subtitulo-secao revelar">
            Trabalhamos com as melhores e mais modernas tecnologias para
            entregar soluções de alta qualidade.
          </p>
        </div>
      </div>

      {/* Carrossel com scroll infinito — pausa ao passar o mouse */}
      <div className="tech-wrapper revelar">
        <div className="tech-faixa">
          {listaCompleta.map((tech, idx) => (
            <div key={idx} className="tech-item">
              <i className={`${tech.icone} tech-icone`} />
              <span className="tech-nome">{tech.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
