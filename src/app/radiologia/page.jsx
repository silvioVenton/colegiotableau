import Link from "next/link";
import Image from "next/image"
import dynamic from 'next/dynamic';
import "../radiologia/radiologia.css"
import CadastroRadio from "../components/cadastroRadio"





// Importações necessárias
import React from 'react';

// Estilos in-line temporários para layout

const EnfermagemGrowthChart = dynamic(() => import('../components/EnfermagemGrowthChart'), { ssr: false });
 
 
const HomePage = () => {
  return (
    
    <div className="container">



      <a id="btn_fixo" href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20técnico%20em%20Radiologia"target="_blank" rel="noopener noreferrer">
        <Image
        src="/whatsappLogo.png"
        width={80}
        height={80}
        alt="logoWhatsapp"
        className="logoWhatsapp"
        
        />
        </a>
      {/* Hero Section */}
      <section className="hero">
        <h1>Transforme sua Vida Profissional com um Curso Técnico em Radiologia!</h1>
        <p>Seja o profissional essencial no diagnóstico médico e conquiste uma carreira estável e cheia de oportunidades no setor de saúde.</p>
        <a href="#inscricoes_radiologia" className="buttonHero">  <q> Garanta sua Vaga Agora!</q></a>
      </section>


      <section className="conteudoCurso">
      <h1>Conteúdo Programático do Curso Técnico em Radiologia</h1>
      <ul>
        <li>Introdução à Radiologia </li>
        <li>Anatomia e Fisiologia do Corpo Humano</li>
        <li>Radiologia Convencional e Digital</li>
        <li>Proteção Radiológica e Segurança</li>
        <li>Imagem Computadorizada e Tomografia</li>
        <li>Radiologia Intervencionista</li>
        <li>Ética e Legislação Profissional</li>
        <li>Estágio Supervisionado</li>
        <li>Carga Horária: Total: 1.200 horas (em média 6 meses de curso intensivo)</li>
      </ul>
    </section>

      {/* Seção de Benefícios do Curso */}
      <section className="cause">
        <h1>Por que escolher o Colégio Tableau ?</h1>
        <p>
        Com mais de <strong>25 anos</strong> de experiência, oferecemos uma equipe de professores especializados e apaixonados por ensinar, que dedicam-se a transformar cada aula em um passo significativo para o seu futuro. Além disso, contamos com uma <strong>estrutura de estágio integrada para os cursos de enfermagem</strong>, garantindo que você desenvolva habilidades práticas e <strong>entre no mercado de trabalho com confiança e qualificação.</strong>
        </p>
        <Link href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20de%20Radiologia"target="_blank" rel="noopener noreferrer">
        <button type="button" className="causeButton"> Fale com nossa secretaria</button>
        </Link>
        
      </section>

      <section className="onde">
        <h1>Onde Você Podera Atuar Após a Conclusão do Curso?</h1>
        <div className="ondeLocais">
          <ul>
            <li><strong>Hospitais e Clínicas de Diagnóstico por Imagem </strong></li>
            <li><strong>Laboratórios de Tomografia e Ressonância Magnética </strong> </li>
            <li><strong>Clínicas e Centros de Saúde </strong></li>
            <li><strong>Indústria e Pesquisa </strong></li>
            <li><strong>Saúde Pública e Instituições Governamentais </strong></li>
          </ul>

        </div>
        
        
        
        
      </section>


      

      {/* Seção de Crescimento da Enfermagem */}
      <section className="sectionDados">
        <div className="dadosCofen">
        <h1>A Radiologia é uma Profissão em Expansão e Alta Demanda no Mercado de Trabalho!</h1>
        <h2>
        O mercado de trabalho para técnicos em Radiologia tem mostrado um crescimento constante nos últimos anos. De acordo com dados do Instituto Brasileiro de Geografia e Estatística (IBGE), a área da saúde no Brasil tem se expandido significativamente, com destaque para os profissionais especializados em diagnóstico por imagem. Em 2023, o Censo da Saúde revelou que a demanda por técnicos de radiologia aumentou 14% em relação ao ano anterior, devido ao avanço das tecnologias de imagem e à maior procura por exames especializados.

Além disso, a Associação Brasileira de Técnicos em Radiologia (ABTR) indicou que cerca de 80% dos hospitais brasileiros têm buscado ativamente mais profissionais qualificados para operar equipamentos modernos, como tomógrafos e ressonâncias magnéticas. Esses números refletem uma necessidade crescente e uma grande oportunidade de inserção no mercado para quem deseja se tornar um técnico de radiologia.

<p>Fontes:</p>

Instituto Brasileiro de Geografia e Estatística (IBGE) – Censo da Saúde 2023
Associação Brasileira de Técnicos em Radiologia (ABTR) – Relatório Anual 2023
</h2>
        </div>
        
        
      </section>
      <section className="galeria">
        <Image
        src="/galeria/radiologia/rad01.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/radiologia/rad03.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/radiologia/rad04.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/radiologia/rad05.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
       

      </section>
      
      

      {/* Seção de Testemunhos */}
      

      {/* Seção Final - Última Chamada para Ação */}
      <section className="cta" id="inscricoes_radiologia">
        <h1 className="sectionTitle">Está pronto para fazer a diferença?</h1>
        
        <CadastroRadio
        />
        
        
      </section>

     
    </div>
  );
};

export default HomePage;