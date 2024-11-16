import Link from "next/link";
import Image from "next/image"
import dynamic from 'next/dynamic';
import "../enfermagem/enfermagem.css"
import CadastroEnf from "../components/cadastroEnf"





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
        <h1>Construa uma carreira de sucesso na enfermagem</h1>
        <p>Sua oportunidade de impactar vidas e conquistar estabilidade começa aqui.</p>
        <a href="#inscricoes_enfermagem" className="buttonHero">  <q>Quero me inscrever no Curso.!</q></a>
      </section>


      <section className="conteudoCurso">
      <h1>Conteúdo Programático</h1>
      <ul>
        <li>Primeiros socorros e Emergências</li>
        <li>Anatomia e Fisiologia</li>
        <li>Cuidados com a saúde e enfermagem geriátrica</li>
        <li>Administração de Medicamentos</li>
        <li>Práticas de Enfermagem em Clínica e Hospitalar</li>
        <li>Duração de 24 meses (PARA AUXILIAR e TÉCNICO DE ENFERMAGEM)</li>
        <li>Duração: 10 Meses (PARA QUEM JÁ TEM AUXILIAR DE ENFERMAGEM)</li>
      </ul>
    </section>

      {/* Seção de Benefícios do Curso */}
      <section className="cause">
        <h1>Por que escolher o Colégio Tableau ?</h1>
        <p>
        Com mais de <strong>25 anos</strong> de experiência, oferecemos uma equipe de professores especializados e apaixonados por ensinar, que dedicam-se a transformar cada aula em um passo significativo para o seu futuro. Além disso, contamos com uma <strong>estrutura de estágio integrada para os cursos de enfermagem</strong>, garantindo que você desenvolva habilidades práticas e <strong>entre no mercado de trabalho com confiança e qualificação.</strong>
        </p>
        <Link href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20de%20enfermagem"target="_blank" rel="noopener noreferrer">
        <button type="button" className="causeButton"> Fale com nossa secretaria</button>
        </Link>
        
      </section>

      <section className="onde">
        <h1>Onde você pode trabalhar após o curso?</h1>
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
        <h1>Oportunidades sem limites: A enfermagem está em alta!</h1>
        <p>
          O número de profissionais de enfermagem no Brasil cresceu 66% nos últimos 10 anos. No mundo, o déficit global
          é de 5,9 milhões de profissionais. Essa é sua chance de se destacar em uma carreira de alta demanda.
        </p>
        </div>
        
        <div className="grafico">
        <EnfermagemGrowthChart />

        </div>
      </section>
      <section className="galeria">
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
       

      </section>
      
      

      {/* Seção de Testemunhos */}
      

      {/* Seção Final - Última Chamada para Ação */}
      <section className="cta" id="inscricoes_enfermagem">
        <h1 className="sectionTitle">Está pronto para fazer a diferença?</h1>
        <p>O futuro da enfermagem está nas suas mãos. Inscreva-se agora e comece a sua jornada!</p>
        <CadastroEnf
        />
        
        
      </section>

     
    </div>
  );
};

export default HomePage;
