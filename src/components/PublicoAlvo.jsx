import './PublicoAlvo.css';

/* Segmentos de mercado atendidos */
const segmentos = [
  { icone: '🏢', nome: 'Empresas' },
  { icone: '🏥', nome: 'Clínicas' },
  { icone: '📊', nome: 'Escritórios' },
  { icone: '🚛', nome: 'Transportadoras' },
  { icone: '🛒', nome: 'Comércio' },
  { icone: '🏭', nome: 'Indústria' },
  { icone: '🏛️', nome: 'Órgãos Públicos' },
  { icone: '🚀', nome: 'Startups' },
];

export default function PublicoAlvo() {
  return (
    <section className="secao-publico">
      <div className="container">
        <div className="cabecalho-secao">
          <div className="badge-secao revelar">
            <i className="fas fa-users" /> Público-Alvo
          </div>
          <h2 className="titulo-secao revelar">
            Para quem <span className="destaque">desenvolvemos</span>
          </h2>
          <p className="subtitulo-secao revelar">
            Atendemos empresas e organizações de todos os segmentos que
            buscam tecnologia para crescer.
          </p>
        </div>

        <div className="grid-publico">
          {segmentos.map((seg, idx) => (
            <div key={idx} className={`card-publico revelar d${idx % 5}`}>
              <span className="publico-icone">{seg.icone}</span>
              <span className="publico-nome">{seg.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
