import Link from "next/link";
import Image from "next/image"
import dynamic from 'next/dynamic';
import "./veterinaria.css"
import CadastroVet from "../components/cadastroVet"





// Importações necessárias
import React from 'react';

// Estilos in-line temporários para layout

const EnfermagemGrowthChart = dynamic(() => import('../components/EnfermagemGrowthChart'), { ssr: false });
 
 
const HomePage = () => {
  return (
    
    <div className="container">



      <a id="btn_fixo" href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20Técnico%20em%20veterinaria"target="_blank" rel="noopener noreferrer">
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
        <h1>Dê o primeiro passo para uma carreira de sucesso com o Curso Técnico em Veterinária!</h1>
        <p>Prepare-se para fazer a diferença na saúde animal e conquistar um futuro promissor, atuando em clínicas, hospitais e com animais de diferentes espécies.</p>
        <a href="#inscricoes_veterinaria" className="buttonHero">  <q>Quero me inscrever no Curso.!</q></a>
      </section>


      <section className="conteudoCurso">
      <h1>Conteúdo programático</h1>
      <ul>
        <li>Introdução à medicina veterinária</li>
        <li>Anatomia e fisiologia animal</li>
        <li>Doenças infectocontagiosas</li>
        <li>Cuidados de emergência e primeiros socorros</li>
        <li>Farmacologia veterinária</li>
        <li>Cuidados com Animais Silvestres e Exóticos</li>
        <li>Clínica e cirurgia veterinária</li>
        <li>Ética e legislação profissional</li>
        {/*<li>Carga horária: total: 1.200 horas</li>*/}
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
        <h1>Onde você pode atuar após a conclusão do curso?</h1>
        <div className="ondeLocais">
          <ul>
            <li>Clínicas veterinárias e hospitais</li>
            <li>Petshops e centros de estética animal</li>
            <li>Zoológicos e reservas naturais</li>
            <li>Indústrias de alimentos e produtos veterinários </li>
            <li>Escolas e empresas (Atendimento ocupacional)</li>
            <li>Consultoria e educação</li> 
          </ul>

        </div>
        
        
        
        
      </section>


      

      {/* Seção de Crescimento da Enfermagem */}
      <section className="sectionDados">
        <div className="dadosCofen">
        <h1>A Demanda por profissionais de veterinária nunca foi tão grande!</h1>
        <h2>
        O setor veterinário no Brasil está em plena expansão. De acordo com o Instituto Brasileiro de Geografia e Estatística (IBGE), o número de clínicas e hospitais veterinários aumentou 25% nos últimos 5 anos, refletindo a crescente valorização do cuidado com os animais. Em 2023, a Associação Brasileira de Medicina Veterinária (ABMV) indicou que a área veterinária foi uma das que mais contratou profissionais, com uma alta demanda em regiões urbanas e rurais.

Além disso, o mercado de animais de estimação no Brasil é um dos maiores do mundo. O IBGE apontou que, em 2023, 44% dos lares brasileiros possuem ao menos um animal de estimação, o que intensifica a necessidade de profissionais qualificados na área. Essas estatísticas mostram que a profissão de técnico em Veterinária não só é relevante, como também está em constante crescimento, proporcionando ao profissional estabilidade e diversas opções de atuação.

<p>Fontes:</p>

Instituto Brasileiro de Geografia e Estatística (IBGE) | Pesquisa Nacional sobre Saúde Animal 2023
Associação Brasileira de Medicina Veterinária (ABMV) | Relatório de Crescimento e Oportunidades no Setor Veterinário 2023
        </h2>
        </div>
        
        
      </section>
      <section className="galeria">
        <Image
        src="/galeria/veterinaria/vet01.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/veterinaria/vet02.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/veterinaria/vet03.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
        <Image
        src="/galeria/veterinaria/vet04.png"
        width={500}
        height={500}
        alt="primeira foto"

        />
       

      </section>
      
      

      {/* Seção de Testemunhos */}
      

      {/* Seção Final - Última Chamada para Ação */}
      <section className="cta" id="inscricoes_veterinaria">
        <h1 className="sectionTitle">Está pronto para fazer a diferença?</h1>
        
        <CadastroVet
        />
        
        
      </section>

     
    </div>
  );
};

export default HomePage;
