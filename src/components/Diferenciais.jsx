import './Diferenciais.css';

/* Diferenciais competitivos da empresa */
const diferenciais = [
  {
    icone: '⚡',
    nome: 'Agilidade',
    desc: 'Projetos entregues com rapidez e organização, respeitando prazos e comunicando cada etapa.',
  },
  {
    icone: '🛡️',
    nome: 'Qualidade',
    desc: 'Código limpo, seguro e com foco total na experiência do usuário final e na performance.',
  },
  {
    icone: '🎯',
    nome: 'Personalização',
    desc: 'Nada de sistemas engessados. Cada solução é criada exclusivamente para o seu negócio.',
  },
  {
    icone: '📈',
    nome: 'Crescimento',
    desc: 'Tecnologia pensada para ajudar sua empresa a crescer, escalar e se destacar no mercado.',
  },
];

export default function Diferenciais() {
  return (
    <section className="secao-diferenciais">
      <div className="container">
        <div className="cabecalho-secao">
          <div className="badge-secao revelar">
            <i className="fas fa-star" /> Diferenciais
          </div>
          <h2 className="titulo-secao revelar">
            Por que escolher a <span className="destaque">HD Code?</span>
          </h2>
          <p className="subtitulo-secao revelar">
            Nosso compromisso é com o sucesso do seu negócio, com proximidade
            e resultados em cada projeto.
          </p>
        </div>

        <div className="grid-diferenciais">
          {diferenciais.map((d, idx) => (
            <div key={idx} className={`card-diferencial revelar d${idx}`}>
              <span className="dif-icone">{d.icone}</span>
              <h3 className="dif-nome">{d.nome}</h3>
              <p className="dif-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
