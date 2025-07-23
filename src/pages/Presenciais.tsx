import React from 'react'
import '../index.css'

const Presenciais: React.FC = () => (
  <main className="presenciais-container">
    <header className="presenciais-header">
      <h1>Doações Presenciais</h1>
      <p>
        Contribua pessoalmente com a nossa organização. Toda ajuda é bem-vinda!
      </p>
    </header>

    <section className="presenciais-info">
      <div className="info-item">
        <img src="/images/doacoes/local.png" alt="Local" />
        <h3>Endereço</h3>
        <p>Rua Frederico Alvarenga, nº300<br />Centro, Belo Horizonte - MG</p>
      </div>

      <div className="info-item">
        <img src="/images/doacoes/calendar.png" alt="Horários" />
        <h3>Horários de Atendimento</h3>
        <p>Segunda a Sexta<br />09:00 - 17:00</p>
      </div>

      <div className="info-item">
        <img src="/images/doacoes/items.png" alt="Itens aceitos" />
        <h3>O que Aceitamos</h3>
        <ul>
          <li>Alimentos não perecíveis</li>
          <li>Roupas e calçados</li>
          <li>Material escolar</li>
          <li>Brinquedos em bom estado</li>
        </ul>
      </div>
    </section>

    <footer className="presenciais-footer">
      <p>Entre em contato conosco para combinar a entrega ou tirar dúvidas.</p>
      <a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
        <button className="btn-contato">Falar pelo WhatsApp</button>
      </a>
    </footer>
  </main>
)

export default Presenciais
