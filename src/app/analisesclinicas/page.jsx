import Link from "next/link";
import Image from "next/image"
import dynamic from 'next/dynamic';
import "./analises.css"
import CadastroAnalises from "../components/cadastroAnalises "





// Importações necessárias
import React from 'react';

// Estilos in-line temporários para layout

const EnfermagemGrowthChart = dynamic(() => import('../components/EnfermagemGrowthChart'), { ssr: false });
 
 
const HomePage = () => {
  return (
    
    <div className="container">



      <a id="btn_fixo" href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20Técnico%20em%20análises%20clínicas"target="_blank" rel="noopener noreferrer">
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
        <h1>Transforme sua Carreira com o Curso Técnico em Análises Clínicas!</h1>
        <p>Prepare-se para ser um profissional essencial nos diagnósticos médicos, atuando com precisão e qualidade na coleta e análise de exames laboratoriais.</p>
        <a href="#inscricoes_analises" className="buttonHero">  <q>Quero me inscrever no Curso.!</q></a>
      </section>


      <section className="conteudoCurso">
      <h1>Conteúdo Programático</h1>
      <ul>
        <li>Introdução às Análises Clínicas</li>
        <li>Microbiologia e Parasitologia</li>
        <li>Bioquímica Clínica</li>
        <li>Hematologia</li>
        <li>Imunologia e Sorologia</li>
        <li>Análises de Urina e Fezes</li>
        <li>Técnicas de Coleta de Material Biológico</li>
        <li>Legislação e Ética Profissional</li>
        <li>Técnicas de Coleta de Material Biológico</li>
        {/*<li>Carga horária: total: 1.200 horas</li>*/}
      </ul>
    </section>

      {/* Seção de Benefícios do Curso 
      <section className="cause">
        <h1>Por que escolher o Colégio Tableau ?</h1>
        <p>
        Com mais de <strong>25 anos</strong> de experiência, oferecemos uma equipe de professores especializados e apaixonados por ensinar, que dedicam-se a transformar cada aula em um passo significativo para o seu futuro. Além disso, contamos com uma <strong>estrutura de estágio integrada para os cursos de enfermagem</strong>, garantindo que você desenvolva habilidades práticas e <strong>entre no mercado de trabalho com confiança e qualificação.</strong>
        </p>
        <Link href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20de%20Analises%20Clinícas"target="_blank" rel="noopener noreferrer">
        <button type="button" className="causeButton"> Fale com nossa secretaria</button>
        </Link>
        
      </section>*/}

      <section className="onde">
        <h1>A Profissão de Técnico em Análises Clínicas Está em Expansão e Com Grandes Oportunidades de Emprego!</h1>
        <div className="ondeLocais">
          <ul>
            <li>Laboratórios de Análises Clínicas</li>
            <li>Hospitais e Clínicas Médicas</li>
            <li>Indústrias Farmacêuticas e Biotecnológicas</li>
            <li>Laboratórios de Pesquisa</li>
            <li>Saúde Pública e Clínicas de Saúde</li>
            <li>Consultoria e Treinamento</li>
            
          </ul>

        </div>
        
        
        
        
      </section>


      

      {/* Seção de Crescimento da Enfermagem */}
      <section className="sectionDados">
        <div className="dadosCofen">
        <h1>A Profissão de Técnico em Análises Clínicas Está em Expansão e Com Grandes Oportunidades de Emprego!</h1>
        <h2>
        O mercado de análises clínicas no Brasil tem mostrado crescimento contínuo. Segundo o Instituto Brasileiro de Geografia e Estatística (IBGE), a área de saúde tem apresentado alta demanda por profissionais especializados em exames laboratoriais. Em 2023, o Censo da Saúde indicou que o número de laboratórios de análises clínicas aumentou 17% em relação ao ano anterior, refletindo a crescente necessidade de diagnósticos rápidos e precisos.

Além disso, dados da Associação Brasileira de Análises Clínicas (ABRAC) apontam que o setor de análises clínicas gerou mais de 25.000 novas vagas de trabalho no Brasil em 2023, com a grande maioria em hospitais, clínicas e laboratórios de pequeno, médio e grande porte.

<p>Fontes:</p>

Instituto Brasileiro de Geografia e Estatística (IBGE) | Censo da Saúde 2023
Associação Brasileira de Análises Clínicas (ABRAC) | Relatório de Crescimento do Setor de Análises Clínicas 2023
Considerações Finais:
        </h2>
        </div>
       
      </section>
      <section className="galeria">
        <Image
        src="/galeria/analises/ana01.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/analises/ana02.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/analises/ana03.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/analises/ana04.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
       

      </section>
      
      

      {/* Seção de Testemunhos */}
      

      {/* Seção Final - Última Chamada para Ação */}
      <section className="cta" id="inscricoes_analises">
        <h1 className="sectionTitle">Está pronto para fazer a diferença?</h1>
        <p>Inscreva-se agora e comece a sua jornada!</p>
        <CadastroAnalises
        />
        
        
      </section>

     
    </div>
  );
};

export default HomePage;
