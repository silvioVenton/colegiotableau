import Image from "next/image"
import "../cer/cer.css"
import CadastroFund from "../components/cadastroFund"
export default function Fundamental(){
    return(
        <>
        <a id="btn_fixo" href="https://wa.me/5511991205350?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Fundamental%20ou%20Médio"target="_blank" rel="noopener noreferrer">
        <Image
        src="/whatsappLogo.png"
        width={50}
        height={50}
        alt="logoWhatsapp"
        className="logoWhatsapp"
        
        />
        </a>
        <main>
        <section className="hero">
            <h1>A educação que transforma o futuro do seu filho</h1>
            <p>Prepare-se para oferecer a ele uma formação completa, que une excelência acadêmica e desenvolvimento pessoal, para conquistar o mundo.</p>
            <a href="#matriculasFundamental" className="buttonHero">  <q>Matriculas Abertas</q></a>
        </section>

        <section className="contentCer">
            <h1>O que nosso ensino fundamental e médio oferecem</h1>
            <div className="itensContentCer">
                <div className="item">
                    <h2>Qualidade acadêmica:</h2>
                    <span>Conteúdo atualizado e interdisciplinar, que prepara para o ensino superior e para a vida.</span>

                </div>
                <div className="item">
                    <h2>Desenvolvimento pessoal:</h2>
                    <span> Atividades que incentivam a criatividade, o pensamento crítico e a confiança.</span>

                </div>
                <div className="item">
                    <h2>Apoio emocional:</h2>
                    <span>Equipe dedicada ao bem-estar emocional dos alunos, com acompanhamento personalizado</span>

                </div>

            </div>

            
        </section>

        <section className="mackenzie">
        <div className="metodologia"> 
           <p> Metodologia </p>
            <h5>"No Colégio Tableau, inspirados pelo modelo Mackenzie de excelência e tradição desde 1870, acreditamos que educar é uma vocação. Nossa equipe de professores especializados traz o prazer de ensinar diariamente, oferecendo ao seu filho um desenvolvimento completo e individualizado.

Com a metodologia cognitivo-interacionista, valorizamos a interação do aluno com a realidade e o conhecimento transmitido pelo professor, respeitando o estágio cognitivo de cada um. Assim, o conteúdo faz sentido e se conecta a um aprendizado real, integrado e transformador.

Confiar a educação do seu filho ao Colégio Tableau é garantir uma formação que respeita suas potencialidades e dificuldades, preparando-o para o futuro com uma base sólida e inspiradora."</h5>

        </div>
        <div className="metodo">
            <Image
             src="/mackNegativor.png"
             width={600}
             height={200}
             alt="mackenzie"
             
            />
            </div>

        </section>

        <section className="bolsa" id="matriculasFundamental">

        <CadastroFund
        />

        <a href="https://wa.me/5511991205350?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20sobre%20prova%20de%20Bolsa"target="_blank" rel="noopener noreferrer">   
        <Image
        src="/bolsa.png"
        width={400}
        height={400}
        alt="bolsa de estudo"
        className="img_bolsa"
        />
        </a>
        </section>
        </main>
        </>
    )
}