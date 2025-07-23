import React from 'react'
import '../index.css'

const Online: React.FC = () => {
  return (
    <main className="doacoes-container">
      <header className="doacoes-header">
        <h1>Doações Online</h1>
        <p>
          Apoie nossa causa e ajude-nos a transformar vidas. Sua contribuição faz toda a diferença!
        </p>
      </header>

      <section className="metodos-doacao">
        <div className="metodo">
          <img src="/images/doacoes/pix.png" alt="Doação via Pix" />
          <h3>Via Pix</h3>
          <p>Chave Pix: <strong>apoie@redeimigrantes.org</strong></p>
        </div>

        <div className="metodo">
          <img src="/images/doacoes/paypal.png" alt="Doação via PayPal" />
          <h3>Via PayPal</h3>
          <p>
            Clique abaixo para doar com segurança:
            <br />
            <a href="https://paypal.me/suaporte" target="_blank" rel="noopener noreferrer">
              <button className="botao-doar">Doar com PayPal</button>
            </a>
          </p>
        </div>

        <div className="metodo">
          <img src="/images/doacoes/qrcode.png" alt="QR Code" className="qr-code" />
          <h3>Via QR Code</h3>
          <p>Escaneie com seu celular para doar rapidamente.</p>
        </div>
      </section>
    </main>
  )
}

export default Online
