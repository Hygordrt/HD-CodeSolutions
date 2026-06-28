import { useState, useEffect } from 'react';
import './Navbar.css';

/* Barra de navegação fixa no topo com efeito ao rolar */
export default function Navbar() {
  const [rolado, setRolado] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 40);
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  /* Fecha o menu ao clicar em qualquer link */
  const fecharMenu = () => setMenuAberto(false);

  return (
    <nav className={`navbar ${rolado ? 'rolado' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#inicio" className="logo" onClick={fecharMenu}>
          <div className="logo-box">HD</div>
          <span className="logo-nome">HD Code <span>Solutions</span></span>
        </a>

        {/* Links de navegação */}
        <ul className={`nav-links ${menuAberto ? 'aberto' : ''}`}>
          <li><a href="#inicio" onClick={fecharMenu}>Início</a></li>
          <li><a href="#servicos" onClick={fecharMenu}>Serviços</a></li>
          <li><a href="#processo" onClick={fecharMenu}>Como Trabalhamos</a></li>
          <li><a href="#portfolio" onClick={fecharMenu}>Portfólio</a></li>
          <li><a href="#tecnologias" onClick={fecharMenu}>Tecnologias</a></li>
          <li>
            <a href="#contato" className="nav-cta" onClick={fecharMenu}>
              Solicitar Orçamento
            </a>
          </li>
        </ul>

        {/* Botão hambúrguer para mobile */}
        <button
          className={`hamburger ${menuAberto ? 'ativo' : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
