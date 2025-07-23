import React from 'react'
import '../index.css'

const cursos = [
  {
    titulo: 'Capacitação Profissional',
    descricao: 'Cursos voltados para o mercado de trabalho, com certificação e orientação prática.',
    imagem: '/images/formacao/profissional.jpg'
  },
  {
    titulo: 'Educação para Migrantes',
    descricao: 'Oficinas sobre direitos, acesso a serviços e integração cultural.',
    imagem: '/images/formacao/migrantes.jpg'
  },
  {
    titulo: 'Formação de Lideranças',
    descricao: 'Desenvolvemos lideranças comunitárias com foco em transformação social.',
    imagem: '/images/formacao/lideranca.jpg'
  }
]

const Formacao: React.FC = () => {
  return (
    <main className="formacao-container">
      <header className="formacao-header">
        <div className="overlay">
          <h1>Formação e Capacitação</h1>
          <p>
            Oferecemos cursos, oficinas e treinamentos voltados para o desenvolvimento pessoal e profissional, 
            valorizando o trabalho e a autonomia.
          </p>
        </div>
      </header>

      <section className="formacao-grid">
        {cursos.map((curso, index) => (
          <div className="curso-card" key={index}>
            <img src={curso.imagem} alt={curso.titulo} />
            <div className="curso-info">
              <h3>{curso.titulo}</h3>
              <p>{curso.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Formacao
