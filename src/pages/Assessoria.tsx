import React from 'react'
import '../index.css'

const services = [
  {
    titulo: 'Desenvolvimento de Projetos',
    descricao: 'Ajudamos na elaboração de projetos sociais com foco em impacto e sustentabilidade.',
    imagem: '/images/assessoria/projetos.jpg'
  },
  {
    titulo: 'Captação de Recursos',
    descricao: 'Orientamos na busca por financiamentos e parcerias estratégicas.',
    imagem: '/images/assessoria/recursos.jpg'
  },
  {
    titulo: 'Gestão Institucional',
    descricao: 'Fortalecemos a estrutura organizacional com planejamento e governança.',
    imagem: '/images/assessoria/gestao.jpg'
  }
]

const Assessoria: React.FC = () => {
  return (
    <main className="assessoria-container">
      <header className="assessoria-header">
        <div className="overlay">
          <h1>Assessoria Técnica</h1>
          <p>
            Prestamos assessoria a organizações sociais, coletivos e movimentos populares,
            auxiliando no desenvolvimento de projetos, captação de recursos e gestão institucional.
          </p>
        </div>
      </header>

      <section className="assessoria-grid">
        {services.map((item, index) => (
          <div className="assessoria-card" key={index}>
            <img src={item.imagem} alt={item.titulo} />
            <div className="assessoria-info">
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Assessoria
