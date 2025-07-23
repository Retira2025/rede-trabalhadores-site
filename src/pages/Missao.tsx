import React from 'react';
import '../index.css';

const Missao: React.FC = () => {
  return (
    <div className="missao-page">
      {/* Bandeau avec image et titre */}
      <header className="missao-hero">
        <div className="missao-hero-overlay">
          <h1>Nossa Missão</h1>
          <p>Compromisso com justiça, dignidade e inclusão dos imigrantes e apátridas no Brasil.</p>
        </div>
      </header>

      {/* Section contenu + image à gauche ou droite */}
      <section className="missao-section">
        <div className="missao-text">
          <h2>Quem Somos</h2>
          <p>
            A Rede dos Trabalhadores Imigrantes, Refugiados e Apátridas é uma associação civil de caráter privado, sem fins lucrativos, que nasce do compromisso ético com a dignidade humana, a justiça social e a defesa dos direitos das populações em situação v. Formalmente constituidída conforme os princípios legais vigentes, a entidade tem por finalidade promover ações de acolhimento de sua autonomia cidadania e inserção social.
            
            A rede atua com base em princípios de solidariedade, inclusão, pluralidade e respeito à diversidade. Seu caráter é expressamente filantrópico, assistencial, educacional, promocional e recreativo, sendo completamente desvinculada de ideologias político-partidárias crenças religiosas ou interesses econômicos. Compreendemos que o processo migratório envolve inúmeros desafios — desde a regularização documental até a superação de barreiras linguísticas, culturais e institucionais —, e é nesse contexto que a Rede se posicionar como uma plataforma de apoio, representação e articulação coletiva.
            
            Nossas ações incluem a orientação jurídica e instutucional, o apoio na emissão de documentos, o encaminhamento para serviços públicos e redes de proteção, bem como a realização de oficinas, cursos eventos e projetos voltados à qualificação profissional, ao fortalecimento comunitário e à defesa de direitos. Atuamos também no campo da formação política e educacional, estimulando a participação ativa das populações migrantes na vida pública, social e cultural do país.
            
            Mais do que uma organização, somos um espaço de escuta, acolhimento e construção coletiva, formado por migrantes para migrantes. Acreditamos que a transformação social passa pela união das vozes que historicamente foram silenciadas. Assim, seguimos firmes no propósito de construir uma sociedade mais justa, equitativa e comprometida com a dignidade de todas as pessoas, independentemente de sua origem ou nacionalidade.
          </p>
          <h2> Nossa Missão </h2>
          <p>
            Somos uma rede comprometida com a justiça social e a valorização do trabalho digno,
            atuando junto a imigrantes e apátridas em situação de vulnerabilidade. 
            Nossa missão é construir pontes entre diferentes realidades, garantindo acesso a direitos
            e oportunidades de desenvolvimento pessoal, profissional e comunitário.
          </p>
          <p>
            Atuamos em diversas frentes: acolhimento, orientação jurídica, integração sociocultural, 
            qualificação profissional e mobilização social.
          </p>
        </div>
        <div className="missao-image">
          <img src="/images/missao-equipe.jpg" alt="Equipe de acolhimento" />
        </div>
      </section>

      {/* Section galerie ou témoignages */}
      <section className="missao-gallery">
        <img src="/images/projeto1.jpg" alt="Projeto com imigrantes" />
        <img src="/images/projeto2.jpg" alt="Ação comunitária" />
        <img src="/images/projeto3.jpg" alt="Formação profissional" />
      </section>
    </div>
  );
};

export default Missao;
