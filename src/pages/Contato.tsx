import React from 'react'
import '../index.css'

const Contato: React.FC = () => {
  return (
    <main className="contato-container">
      <header className="contato-header">
        <h1>Entre em Contato</h1>
        <p>
          Tire dúvidas, proponha parcerias ou participe das nossas atividades. Estamos aqui para ajudar!
        </p>
      </header>

      <section className="contato-info">
        <div className="info-box">
          <img src="/images/contato/email.png" alt="Email" />
          <h3>Email</h3>
          <p>
            <a href="mailto:contato@rededetrabalhadores.org">
              contato@rededetrabalhadores.org
            </a>
          </p>
        </div>
        <div className="info-box">
          <img src="/images/contato/phone.png" alt="Telefone" />
          <h3>Telefone</h3>
          <p>+55 (11) 1234-5678</p>
        </div>
        <div className="info-box">
          <img src="/images/contato/location.png" alt="Endereço" />
          <h3>Endereço</h3>
          <p>Rua Exemplo, 123<br />São Paulo - SP</p>
        </div>
      </section>

      <section className="contato-form">
        <h2>Envie uma mensagem</h2>
        <form>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu email" required />
          <textarea placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  )
}

export default Contato
