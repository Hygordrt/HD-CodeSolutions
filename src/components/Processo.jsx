import './Processo.css';

/* Etapas do processo de desenvolvimento */
const etapas = [
  { icone: '💬', numero: '01', nome: 'Conversa Inicial', desc: 'Entendemos suas necessidades, objetivos e desafios para propor a solução mais adequada.' },
  { icone: '📋', numero: '02', nome: 'Levantamento de Requisitos', desc: 'Mapeamos todos os processos e funcionalidades necessárias para o projeto.' },
  { icone: '🎨', numero: '03', nome: 'Protótipo', desc: 'Criamos um protótipo visual para validar o design e a usabilidade antes do desenvolvimento.' },
  { icone: '💻', numero: '04', nome: 'Desenvolvimento', desc: 'Desenvolvemos com código limpo e seguro usando as melhores tecnologias do mercado.' },
  { icone: '🧪', numero: '05', nome: 'Testes', desc: 'Testamos rigorosamente cada funcionalidade para garantir qualidade e confiabilidade.' },
  { icone: '🚀', numero: '06', nome: 'Implantação', desc: 'Realizamos a implantação no ambiente de produção com suporte total durante a virada.' },
  { icone: '🤝', numero: '07', nome: 'Suporte Contínuo', desc: 'Acompanhamento, treinamento e evolução contínua do sistema após a entrega do projeto.' },
];

export default function Processo() {
  return (
    <section id="processo" className="secao-processo">
      <div className="container">
        <div className="cabecalho-secao">
          <div className="badge-secao revelar">
            <i className="fas fa-route" /> Processo
          </div>
          <h2 className="titulo-secao revelar">
            Como <span className="destaque">trabalhamos</span>
          </h2>
          <p className="subtitulo-secao revelar">
            Do primeiro contato à entrega, cada etapa é conduzida com
            organização, transparência e proximidade.
          </p>
        </div>

        {/* Linha do tempo */}
        <div className="linha-tempo">
          {etapas.map((etapa, idx) => (
            <div key={idx} className={`etapa revelar d${Math.min(idx, 6)}`}>
              {/* Ponto central com ícone */}
              <div className="etapa-ponto">{etapa.icone}</div>

              {/* Conteúdo do card */}
              <div className="etapa-card">
                <div className="etapa-numero">Etapa {etapa.numero}</div>
                <div className="etapa-nome">{etapa.nome}</div>
                <div className="etapa-desc">{etapa.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
