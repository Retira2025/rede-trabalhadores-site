import React from 'react';
import './inicio.css';

const Inicio: React.FC = () => {
  return (
    <>
      <div className="inicio-bg"></div> {/* Image de fond */}
      <main className="inicio-wrapper">
        <div className="inicio-content">
          <h1>Bem-vindo à Rede de Trabalhadores Imigrantes e Apátridas</h1>
          <p>
            Esta é a nossa página inicial. Aqui você encontrará informações sobre nossa missão,
            visão, projetos e formas de contribuir.
          </p>
          <p>
            A Rede dos Trabalhadores Imigrantes, Refugiados e Apátridas é uma associação civil de caráter privado, sem fins lucrativos, que nasce do compromisso ético com a dignidade humana, a justiça social e a defesa dos direitos das populações em situação vulnerável. [...]
          </p>
           <div className="inicio-actions">
        <a href="/missao" className="btn-primary">Nossa Missão</a>
        <a href="/visao" className="btn-secondary">Nossa Visão</a>
        <a href="/projetos" className="btn-secondary">Projetos</a>
      </div>
          {/* Tu peux continuer avec d'autres paragraphes ici */}
        </div>
      </main>
    </>
  );
};

export default Inicio;
