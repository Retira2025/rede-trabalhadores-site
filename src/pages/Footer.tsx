import React from 'react'
import '../index.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-section">
          <h2>Rede dos Trabalhadores</h2>
          <p>Transformando vidas por meio da solidariedade, da formação e da ação coletiva.</p>
        </section>

        <section className="footer-section">
          <h3>Navegação</h3>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/projetos">Projetos</a></li>
            <li><a href="/doacoes">Doações</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </section>

        <section className="footer-section">
          <h3>Contato</h3>
          <p>Email: <a href="mailto:contato@rededetrabalhadores.org">contato@rededetrabalhadores.org</a></p>
          <p>WhatsApp: +55 (11) 1234-5678</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/instagram.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/social/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rede dos Trabalhadores. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
