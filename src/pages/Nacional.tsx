import React from 'react';
import '../index.css';

const projetos = [
  {
    titulo: 'Feira de Integração Cultural',
    imagem: '/images/projeto1.jpg',
    descricao: 'Evento que celebra a diversidade com apresentações culturais, comidas típicas e oficinas para todas as idades.',
    link: '/feira'
  },
  {
    titulo: 'Mutirão de Documentação',
    imagem: '/images/projeto2.jpg',
    descricao: 'Ação em parceria com defensores públicos para regularização migratória e emissão de documentos básicos.',
    link: '/documentacao'
  },
  {
    titulo: 'Oficinas de Capacitação',
    imagem: '/images/projeto3.jpg',
    descricao: 'Cursos de português, costura, tecnologia e direitos trabalhistas oferecidos gratuitamente para imigrantes.',
    link: '/oficinas'
  }
];

const Nacional: React.FC = () => {
  return (
    <main className="nacional-container">
      <header className="nacional-header">
         <div className="overlay">
        <h1>Projetos Comunitários</h1>
        <p>Conheça algumas das nossas ações para fortalecimento social e autonomia das comunidades migrantes.</p>
        </div>
      </header>

      <section className="nacional-cards">
        {projetos.map((projeto, index) => (
          <article className="card" key={index}>
            <div className="card-img">
              <img src={projeto.imagem} alt={projeto.titulo} />
            </div>
            <div className="card-content">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <a className="btn-saiba-mais" href={projeto.link}>Saiba mais</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Nacional;
