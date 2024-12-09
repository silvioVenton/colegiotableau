import Link from "next/link";
import Image from "next/image"
import dynamic from 'next/dynamic';
import "./seguranca.css"
import CadastroSeguranca from "../components/cadastroSeguranca"





// Importações necessárias
import React from 'react';

// Estilos in-line temporários para layout

const EnfermagemGrowthChart = dynamic(() => import('../components/EnfermagemGrowthChart'), { ssr: false });
 
 
const HomePage = () => {
  return (
    
    <div className="container">



      <a id="btn_fixo" href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20Técnico%20em%20segurança%20do%20trabalho"target="_blank" rel="noopener noreferrer">
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
        <h1>Garanta Seu Futuro com o Curso Técnico em Segurança do Trabalho!</h1>
        <p>Seja um profissional essencial na prevenção de acidentes e promoção da saúde no ambiente de trabalho, protegendo vidas e garantindo a conformidade com as normas de segurança.</p>
        <a href="#inscricoes_Seguranca" className="buttonHero">  <q>Quero me inscrever no Curso.!</q></a>
      </section>


      <section className="conteudoCurso">
      <h1>Conteúdo Programático</h1>
      <ul>
        <li>Fundamentos da Segurança do Trabalho </li>
        <li>Legislação Trabalhista e Normas Regulamentadoras (NRs)</li>
        <li>Análise de Riscos e Perigos</li>
        <li>Equipamentos de Proteção Individual (EPIs)</li>
        <li>Ergonomia no Ambiente de Trabalho</li>
        <li>Acidentes de Trabalho e Investigação</li>
        <li>Carga Horária: Total: 1.200 horas</li>
        
      </ul>
    </section>

      {/* Seção de Benefícios do Curso 
      <section className="cause">
        <h1>Por que escolher o Colégio Tableau ?</h1>
        <p>
        Com mais de <strong>25 anos</strong> de experiência, oferecemos uma equipe de professores especializados e apaixonados por ensinar, que dedicam-se a transformar cada aula em um passo significativo para o seu futuro. Além disso, contamos com uma <strong>estrutura de estágio integrada para os cursos de enfermagem</strong>, garantindo que você desenvolva habilidades práticas e <strong>entre no mercado de trabalho com confiança e qualificação.</strong>
        </p>
        <Link href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20de%20enfermagem"target="_blank" rel="noopener noreferrer">
        <button type="button" className="causeButton"> Fale com nossa secretaria</button>
        </Link>
        
      </section>*/}

      <section className="onde">
        <h1>Onde você pode trabalhar após o curso?</h1>
        <div className="ondeLocais">
          <ul>
            <li>Indústrias e Fábricas </li>
            <li>Construção Civil</li>
            <li>Empresas de Consultoria em Segurança do Trabalho</li>
            <li>Órgãos Públicos e Reguladores</li>
            <li>Hospitais e Clínicas de Saúde Ocupacional</li>
            <li>Comércio e Varejo</li>
            <li>Hospitais e Clínicas de Saúde Ocupacional</li>
            
          </ul>

        </div>
        
        
        
        
      </section>


      

      {/* Seção de Crescimento da Enfermagem */}
      <section className="sectionDados">
        <div className="dadosCofen">
        <h1>O Crescimento da Profissão de Técnico em Segurança do Trabalho no Brasil</h1>
        <h2>
        Com o aumento das exigências legais e a crescente preocupação com a saúde e segurança no trabalho, a profissão de técnico em segurança do trabalho está em pleno crescimento. Segundo a Fundação Getúlio Vargas (FGV), a demanda por profissionais dessa área aumentou 22% nos últimos 4 anos. Além disso, o número de empresas que investem em programas de segurança tem crescido significativamente, especialmente após a implementação das novas normas de segurança.

Em 2023, o Instituto Nacional de Seguro Social (INSS) registrou uma redução de 15% nos acidentes de trabalho em empresas que possuem técnicos de segurança do trabalho qualificados. Este dado reforça a importância do profissional para a saúde dos trabalhadores e a redução de custos com acidentes.

A Associação Brasileira de Normas Técnicas (ABNT) indica que a criação de novas normas de segurança vai continuar a impulsionar a demanda por técnicos na área, garantindo que o setor se mantenha em crescimento.

<p>Fontes:</p>

Fundação Getúlio Vargas (FGV) | Estudo sobre a Demanda por Profissionais de Segurança no Trabalho, 2023
Instituto Nacional de Seguro Social (INSS) | Relatório de Acidentes de Trabalho e Prevenção 2023
Associação Brasileira de Normas Técnicas (ABNT) | Estudo sobre Normas e Regulamentações para a Segurança no Trabalho 2023
        </h2>
        </div>
        
       
      </section>
      {/*<section className="galeria">
        <Image
        src="/galeria/enfermagem/enf01.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/enfermagem/enf05.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/enfermagem/enf03.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/enfermagem/enf04.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
       

      </section>*/}
      
      

      {/* Seção de Testemunhos */}
      

      {/* Seção Final - Última Chamada para Ação */}
      <section className="cta" id="inscricoes_Seguranca">
        <h1 className="sectionTitle">Está pronto para fazer a diferença?</h1>
        <p>Inscreva-se agora e comece a sua jornada!</p>
        <CadastroSeguranca
        />
        
        
      </section>

     
    </div>
  );
};

export default HomePage;
