import './Rodape.css';

/* Rodapé com informações de contato e links */
export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-inner">
        {/* Parte superior: marca + colunas de links */}
        <div className="rodape-topo">
          {/* Marca e redes sociais */}
          <div className="rodape-marca">
            <a href="#inicio" className="logo-rodape">
              <div className="logo-box">HD</div>
              <span className="logo-nome">
                HD Code <span>Solutions</span>
              </span>
            </a>
            <p>
              Transformando ideias em sistemas que geram resultados. Soluções
              em TI com agilidade, qualidade e proximidade.
            </p>
            <div className="redes-sociais">
              <a href="#" className="btn-social" title="Instagram" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="btn-social" title="LinkedIn" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#" className="btn-social" title="GitHub" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a
                href="https://wa.me/5500000000000"
                className="btn-social"
                title="WhatsApp"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Menu de navegação */}
          <div className="rodape-coluna">
            <h4>Menu</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#processo">Como Trabalhamos</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#tecnologias">Tecnologias</a></li>
            </ul>
          </div>

          {/* Lista de serviços */}
          <div className="rodape-coluna">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Sistemas Personalizados</a></li>
              <li><a href="#servicos">Landing Pages</a></li>
              <li><a href="#servicos">Automação</a></li>
              <li><a href="#servicos">Dashboards</a></li>
              <li><a href="#servicos">Integrações</a></li>
            </ul>
          </div>

          {/* Informações de contato */}
          <div className="rodape-coluna">
            <h4>Contato</h4>
            <div className="contato-item">
              <i className="fab fa-whatsapp" />
              <span>(00) 00000-0000</span>
            </div>
            <div className="contato-item">
              <i className="fas fa-envelope" />
              <span>contato@hdcode.com.br</span>
            </div>
            <div className="contato-item">
              <i className="fas fa-map-marker-alt" />
              <span>Brasil</span>
            </div>
          </div>
        </div>

        {/* Parte inferior: copyright */}
        <div className="rodape-base">
          <p>© 2025 HD Code Solutions. Todos os direitos reservados.</p>
          <div className="rodape-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
