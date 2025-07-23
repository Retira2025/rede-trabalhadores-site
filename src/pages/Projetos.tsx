import React from 'react'
import '../index.css'

const Projetos: React.FC = () => {
  const projetos = [
    {
      titulo: 'An Kreyòl',
      descricao: 'Curso gratuito de alfabetização em crioulo haitiano para imigrantes recém-chegados.',
      imagem: '/images/projetos/ankreyol.png',
    },
    {
      titulo: 'Português para Todos',
      descricao: 'Ensino de português voltado para integração social e inserção no mercado de trabalho.',
      imagem: '/images/projetos/portugues.png',
    },
    {
      titulo: 'Quintessence',
      descricao: 'Projeto de empoderamento feminino com oficinas de costura e empreendedorismo.',
      imagem: '/images/projetos/quintessence.png',
    },
  ]

  return (
    <main className="projetos-container">
      <header className="projetos-header">
        <div className="overlay">
        <h1>Nossos Projetos</h1>
        <p>
          Atuamos em projetos sociais, culturais e educativos que visam o empoderamento de
          comunidades vulneráveis, a geração de renda e o fortalecimento da cidadania ativa.
        </p>
        </div>
      </header>

      <section className="lista-projetos">
        {projetos.map((proj, index) => (
          <div className="projeto-card" key={index}>
            <img src={proj.imagem} alt={proj.titulo} />
            <h3>{proj.titulo}</h3>
            <p>{proj.descricao}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Projetos
