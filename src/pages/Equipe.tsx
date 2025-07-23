import React, { useState } from 'react';
import '../index.css';

interface Member {
  id: number;
  name: string;
  role: string;
  img: string;
  email?: string;
  linkedin?: string;
  area: string;
  description: string;
}

const teamData: Member[] = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Coordenadora de Projetos Sociais',
    img: '/images/team1.jpg',
    email: 'maria@example.com',
    linkedin: 'https://linkedin.com/in/mariasilva',
    area: 'Social',
    description: 'Maria tem 10 anos de experiência em projetos sociais e coordenação comunitária.'
  },
  {
    id: 2,
    name: 'João Pereira',
    role: 'Advogado e Assessor Jurídico',
    img: '/images/team2.jpg',
    email: 'joao@example.com',
    linkedin: 'https://linkedin.com/in/joaopereira',
    area: 'Jurídico',
    description: 'Especialista em direito migratório e direitos humanos.'
  },
  {
    id: 3,
    name: 'Ana Costa',
    role: 'Educadora e Facilitadora',
    img: '/images/team3.jpg',
    email: 'ana@example.com',
    linkedin: 'https://linkedin.com/in/anacosta',
    area: 'Educação',
    description: 'Ana promove cursos e oficinas para qualificação profissional.'
  },
  // Adicione mais membros conforme necessário
];

const areas = ['Todas', 'Social', 'Jurídico', 'Educação'];

const Equipe: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState('Todas');

  const filteredTeam = selectedArea === 'Todas'
    ? teamData
    : teamData.filter(member => member.area === selectedArea);

  return (
    <main className="equipe-page">
      <header className="equipe-header">
        <div className="equipe-header-overlay">
          <h1>Nossa Equipe</h1>
          <p>Conheça as pessoas dedicadas que tornam nosso trabalho possível.</p>
        </div>
      </header>

      <section className="filter-section">
        <span>Filtrar por área: </span>
        {areas.map(area => (
          <button
            key={area}
            className={`filter-btn ${selectedArea === area ? 'active' : ''}`}
            onClick={() => setSelectedArea(area)}
          >
            {area}
          </button>
        ))}
      </section>

      <section className="team-members">
        {filteredTeam.map(member => (
          <article key={member.id} className="member-card" tabIndex={0}>
            <div className="member-img-wrapper">
              <img src={member.img} alt={member.name} />
              <div className="member-description">
                <p>{member.description}</p>
              </div>
            </div>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <div className="contact-links">
              {member.email && (
                <a href={`mailto:${member.email}`} aria-label={`Enviar email para ${member.name}`}>
                  📧
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`}>
                  🔗
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Equipe;
