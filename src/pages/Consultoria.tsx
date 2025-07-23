import React from 'react'
import '../index.css'

const consultorias = [
  {
    titulo: 'Normas Trabalhistas',
    descricao: 'Acompanhamento e orientação sobre leis e boas práticas trabalhistas para organizações sociais.',
    imagem: '/images/consultoria/trabalho.jpg'
  },
  {
    titulo: 'Gestão Financeira',
    descricao: 'Consultoria em finanças sociais e planejamento orçamentário com foco em sustentabilidade.',
    imagem: '/images/consultoria/financeiro.jpg'
  },
  {
    titulo: 'Planejamento Estratégico',
    descricao: 'Apoio na definição de metas e ações para fortalecer o impacto social de cada iniciativa.',
    imagem: '/images/consultoria/estrategia.jpg'
  }
]

const Consultoria: React.FC = () => {
  return (
    <main className="consultoria-container">
      <header className="consultoria-header">
        <div className="overlay">
          <h1>Consultoria Especializada</h1>
          <p>
            Oferecemos consultoria em áreas estratégicas para fortalecer iniciativas
            comunitárias, garantir o cumprimento das normas trabalhistas e promover a
            sustentabilidade social e econômica.
          </p>
        </div>
      </header>

      <section className="consultoria-grid">
        {consultorias.map((item, index) => (
          <div className="consultoria-card" key={index}>
            <img src={item.imagem} alt={item.titulo} />
            <div className="consultoria-info">
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Consultoria
