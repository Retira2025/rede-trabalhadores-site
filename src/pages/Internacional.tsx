import React from 'react';
import '../index.css';

const projetosEspeciais = [
  {
    id: 1,
    titulo: 'Rede Global de Apoio Jurídico',
    descricao: 'Conectamos advogados internacionais para atender migrantes e apátridas em situação vulnerável.',
    imagem: '/images/projetos/juridico.jpg'
  },
  {
    id: 2,
    titulo: 'Campanhas de Incidência',
    descricao: 'Participamos de ações e campanhas junto a organismos internacionais para defender os direitos humanos.',
    imagem: '/images/projetos/incidencia.jpg'
  },
  {
    id: 3,
    titulo: 'Parcerias Transnacionais',
    descricao: 'Colaboramos com organizações da América Latina, Caribe, Europa e África.',
    imagem: '/images/projetos/parcerias.jpg'
  },
];

const Internacional: React.FC = () => {
  return (
    <main className="internacional-container">
      <header className="internacional-header">
        <div className="overlay">
          <h1>Projetos Especiais</h1>
          <p>
            Iniciativas que ultrapassam fronteiras para defender direitos, promover justiça e garantir dignidade.
          </p>
        </div>
      </header>

      <section className="projetos-grid">
        {projetosEspeciais.map(projeto => (
          <div className="projeto-card" key={projeto.id}>
            <img src={projeto.imagem} alt={projeto.titulo} />
            <div className="projeto-info">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Internacional;
