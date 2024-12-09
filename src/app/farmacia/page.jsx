import Link from "next/link";
import Image from "next/image"
import dynamic from 'next/dynamic';
import "./farmacia.css"
import CadastroFarmacia from "../components/cadastroFarmacia"





// Importações necessárias
import React from 'react';

// Estilos in-line temporários para layout

const EnfermagemGrowthChart = dynamic(() => import('../components/EnfermagemGrowthChart'), { ssr: false });
 
 
const HomePage = () => {
  return (
    
    <div className="container">



      <a id="btn_fixo" href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20Técnico%20em%20farmácia"target="_blank" rel="noopener noreferrer">
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
        <h1>Dê um Novo Rumo à Sua Carreira com o Curso Técnico em Farmácia!</h1>
        <p>Capacite-se para atuar na área da saúde, sendo um profissional essencial no atendimento farmacêutico, no controle de medicamentos e no cuidado com a saúde da população.</p>
        <a href="#inscricoes_farmacia" className="buttonHero">  <q>Quero me inscrever no Curso.!</q></a>
      </section>


      <section className="conteudoCurso">
      <h1>Conteúdo Programático</h1>
      <ul>
        <li>Introdução à farmácia</li>
        <li>Química farmacêutica</li>
        <li>Farmacologia e terapêutica</li>
        <li>Legislação farmacêutica</li>
        <li>Controle de qualidade de medicamentos</li>
        <li>Atendimento farmacêutico e orientação ao paciente</li>
        <li>Análises clínicas e laboratoriais</li>
        <li>Estágio supervisionado </li>
        <li>Carga horária: total: 1.200 horas</li>
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
            <li>Farmácias de Bairro e Drogarias</li>
            <li>Hospitais e Clínicas</li>
            <li>Indústria Farmacêutica</li>
            <li>Laboratórios de Análises Clínicas</li>
            <li>Atendimento Farmacêutico Domiciliar</li>
          </ul>

        </div>
        
        
        
        
      </section>


      

      {/* Seção de Crescimento da Enfermagem */}
      <section className="sectionDados">
        <div className="dadosCofen">
        <h1>A Profissão de Técnico em Farmácia Está em Alta e com Grande Potencial de Crescimento!</h1>
        <h2>
        O mercado farmacêutico no Brasil continua em expansão. Segundo dados da Associação Brasileira de Farmácias e Drogarias (ABRAFARMA), a demanda por técnicos de Farmácia cresceu 18% nos últimos 3 anos, impulsionada pela maior valorização da profissão e o aumento da população que busca orientação sobre o uso correto de medicamentos.

Em 2023, o Censo Farmacêutico apontou que a área farmacêutica gerou cerca de 30.000 novas vagas de trabalho no Brasil, refletindo o aumento no número de farmácias e clínicas especializadas. Além disso, a regulamentação da profissão tem permitido aos técnicos em Farmácia exercerem funções mais especializadas, como o acompanhamento de pacientes em tratamentos crônicos e a participação ativa em equipes de saúde.

<p>Fontes:</p>

Associação Brasileira de Farmácias e Drogarias (ABRAFARMA) | Relatório de Crescimento do Setor Farmacêutico 2023
Censo Farmacêutico | Estudo de Crescimento Profissional 2023
Considerações Finais:
        </h2>
        </div>
        
        
      </section>
     {/*  <section className="galeria">
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
      <section className="cta" id="inscricoes_farmacia">
        <h1 className="sectionTitle">Está pronto para fazer a diferença?</h1>
        <p>Inscreva-se agora e comece a sua jornada!</p>
        <CadastroFarmacia
        />
        
        
      </section>

     
    </div>
  );
};

export default HomePage;
