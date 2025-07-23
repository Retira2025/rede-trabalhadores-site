import React from 'react';
import '../index.css';

const Visao: React.FC = () => {
  return (
    <div className="visao-page">
      <header className="visao-hero">
        <div className="visao-hero-overlay">
          <h1>Nossa Visão</h1>
          <p>Por um mundo onde o trabalho digno é um direito de todos, sem fronteiras.</p>
        </div>
      </header>

      <section className="visao-section">
        <h2>Compromisso com o Futuro</h2>
        <p>
          Ser uma referência nacional e internacional na promoção da justiça social e do trabalho digno,
          construindo pontes entre trabalhadores, instituições e a sociedade.
        </p>
        <p>
          Visualizamos um futuro em que todos os trabalhadores, independentemente de sua origem ou situação migratória,
          tenham acesso igualitário a oportunidades, proteção legal e condições de trabalho humanas e seguras.
        </p>
        <p>
          Queremos contribuir para uma sociedade mais inclusiva, solidária e equitativa, onde a diversidade seja valorizada
          e onde a voz de cada trabalhador seja ouvida e respeitada.
        </p>
      </section>
    </div>
  );
};

export default Visao;
