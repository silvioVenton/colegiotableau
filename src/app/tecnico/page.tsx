"use client"
import React from 'react';
import Image from 'next/image';
import "../tecnico/CursosTecnicos.css";


const CursosTecnicos = () => {
  return (
   
    <div className="container">
        <div className='backgroundTecnico'>
        
        <div className='dados'>
            <div className='headline_dados'>
                <p>"Cursos Técnicos: A Porta de Entrada para o Sucesso Profissional!"</p>
                <h1>Os cursos técnicos oferecem um aprendizado especializado que te coloca à frente na busca por emprego. Com reconhecimento no mercado e programas adaptados às necessidades atuais, você sai preparado para desafios reais.</h1>
                <a
                    href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20técnico" /* Substitua pelo seu número de WhatsApp */
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsappButtonhead"
                    >
                    Fale Conosco Agora!
                </a>
                
            </div>
            <div>
                
            </div>
        </div>
        
    </div>
        
       
      {/* Hero Section */}
      <section className="heroSection">
        <h1 className="heroHeadline">Transforme seu Futuro com um Curso Técnico de Qualidade!</h1>
        <p className="heroSubheadline">
          Escolha o caminho certo para uma carreira promissora em áreas de alta demanda. Nossos cursos técnicos oferecem a preparação prática e o conhecimento que você precisa para se destacar no mercado de trabalho.
        </p>
        
      </section>

      {/* Seção de Destaque dos Cursos Técnicos */}
      <section className="cursosSection">
        <h2 className="cursosTitle">Nossos Cursos Técnicos</h2>
        <p className="cursosDescription">
          Explore nossos cursos técnicos e descubra como cada um deles pode ser a chave para o seu sucesso profissional.
        </p>

        {/* Listagem dos Cursos */}
        <div className='listCursos'>
        {[
          
          {
            title: ' Auxiliar e Técnico em Enfermagem',
            description: 'Com o curso de Técnico em Enfermagem, você estará pronto para realizar procedimentos avançados e cuidar dos pacientes.',
            link: '/enfermagem' // Substitua pela rota correta
          },
          {
            title: 'Radiologia',
            description: 'Torne-se um especialista em diagnósticos por imagem e abra portas para uma carreira sólida.',
            link: '/radiologia' // Substitua pela rota correta
          },
          {
            title: 'Veterinária',
            description: 'Se você ama animais e quer trabalhar com a saúde e bem-estar deles, este é o curso certo.',
            link: '/veterinaria' // Substitua pela rota correta
          },
          {
            title: 'Farmácia',
            description: '.',
            link: '/farmacia' // Substitua pela rota correta
          },
          {
            title: 'Análises Clinicas',
            description: '.',
            link: '/analisesclinicas' // Substitua pela rota correta
          },
          {
            title: 'Segurança do Trabalho',
            description: 'Seja um profissional fundamental para garantir ambientes de trabalho mais seguros.',
            link: '/segurancadotrabalho' // Substitua pela rota correta
          }
          
        ].map((curso, index) => (
          
          <div key={index} className="cursoItem">
            <h3 className="cursoTitle">{curso.title}</h3>
            <p className="cursoDescription">{curso.description}</p>
            <a
              href={curso.link} // Link atualizado para a página do curso
              className="whatsappButton"
            >
              Saiba Mais
            </a>
          </div>
          
        ))}
        </div>
      </section>
    </div>
  );
};

export default CursosTecnicos;

