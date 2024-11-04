
import Image from "next/image"
import dynamic from 'next/dynamic';
import "../enfermagem/enfermagem.css"





// Importações necessárias
import React from 'react';

// Estilos in-line temporários para layout

const EnfermagemGrowthChart = dynamic(() => import('../components/EnfermagemGrowthChart'), { ssr: false });
 
 
const HomePage = () => {
  return (
    
    <div className="container">



      <a id="btn_fixo" href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20técnico%20em%20enfermagem"target="_blank" rel="noopener noreferrer">
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
        <h1>Construa uma Carreira de Sucesso na Enfermagem</h1>
        <p>Sua oportunidade de impactar vidas e conquistar estabilidade começa aqui.</p>
        <a href="#inscricao" className="buttonHero">  <q>Quero me inscrever no Curso.!</q></a>
      </section>

      {/* Seção de Benefícios do Curso */}
      <section className="cause">
        <h2>Por Que Escolher o Colégio Tableau ?</h2>
        <p>
        No Colégio Tableau, você encontra mais do que uma educação de qualidade, encontra um verdadeiro parceiro na sua jornada profissional. Com mais de 25 anos de experiência, oferecemos uma equipe de professores especializados e apaixonados por ensinar, que dedicam-se a transformar cada aula em um passo significativo para o seu futuro. Além disso, contamos com uma estrutura de estágio integrada para os cursos de enfermagem, garantindo que você desenvolva habilidades práticas e entre no mercado de trabalho com confiança e qualificação. Escolher o Colégio Tableau é optar por uma instituição que valoriza sua trajetória e está comprometida com o seu sucesso pessoal e profissional.
        </p>
        <button type="button" className="causeButton"> Fale com nossa secretaria</button>
        
        
      </section>

      <section className="onde">
        <h2>Onde Você Pode Trabalhar Após o Curso?</h2>
        <div className="ondeLocais">
          <ul>
            <li>Hospitais e Clínicas</li>
            <li>Home Care (Cuidado em Domicílio)</li>
            <li>Unidades de Saúde Pública</li>
            <li>Laboratórios e Consultórios Médicos</li>
            <li>Escolas e Empresas (Atendimento Ocupacional)</li>
          </ul>

        </div>
        <p>
       
        </p>
        
        
        
      </section>

      {/* Seção de Crescimento da Enfermagem */}
      <section className="sectionDados">
        <div className="dadosCofen">
        <h2>Oportunidades Sem Limites: A Enfermagem Está em Alta!</h2>
        <p className="sectionText">
          O número de profissionais de enfermagem no Brasil cresceu 66% nos últimos 10 anos. No mundo, o déficit global
          é de 5,9 milhões de profissionais. Essa é sua chance de se destacar em uma carreira de alta demanda.
        </p>
        </div>
        
        <div className="grafico">
        <EnfermagemGrowthChart />

        </div>
      </section>
      
      

      {/* Seção de Testemunhos */}
      <section className="classe">
        <h2>Histórias de Sucesso</h2>
        <p>
          Em mais de 25 anos, participamos 
        </p>
        {/* Placeholder para imagens de alunos ou vídeo de depoimento */}
        
      </section>

      {/* Seção Final - Última Chamada para Ação */}
      <section className="cta">
        <h2 className="sectionTitle">Está Pronto para Fazer a Diferença?</h2>
        <p>O futuro da enfermagem está nas suas mãos. Inscreva-se agora e comece a sua jornada!</p>
        <a href="#inscricao" className="buttonCta">Inscreva-se Agora!</a>
      </section>

     
    </div>
  );
};

export default HomePage;
