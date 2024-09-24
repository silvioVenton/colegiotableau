import Image from "next/image";
import "./escola.css";

export default function Home() {
  return (
    
      <main >
       <section className="content_inf">
       <Image
        src="/alunas.png"
        width={400}
        height={400}
        alt="alunas tableau"
        className="img_alunasMobile"
        />
        
        <div className="txtFist">
          <span>Futuro de Excelência</span>
          <p>Para isso é necessario um presente estrutura e com projetos que vão alem da educação 
para um desenvolvimento de habilidades essenciais como pensamento critico, criatividade e responsabilidade 
e nos do Tableau preparamos nossos jovens para buscar seus objetivos
enfrentar desafios e aproveitar oportunidades e alcansar  um futuro de excelencia. </p>
        </div>
        
        <Image
        src="/alunas.png"
        width={400}
        height={400}
        alt="alunas tableau"
        className="img_alunas"
        />
        <Image
        src="/bolsa.png"
        width={400}
        height={400}
        alt="bolsa de estudo"
        className="img_bolsa"
        />

       <Image
       src="/relevo3.png"
       width={1080}
       height={100}
       alt="relevo "
       className="tecnicos2"
       />
       
       </section>


       <section className="tecnicosGeral">
       <Image
       src="/alunaTec.png"
       width={400}
       height={400}
       alt="aluna tableau tecnico"
       className="alunaTec"
       
       />

       <div className="txtTecnico">

        
          <span>Segurança Profissional</span>
        
        <div className="cursoTecnico">
          
              <Image
              src="/cursoTEc.png"
              width={500}
              height={500}
              alt="curso tecnico"
              className="cursoTec"
              />
          
          
            <p>É com muito orgulho que o Colégio Tableau tem a satisfação em ter formado milhares de profissionais em nossas diversas areas de ensino técnico e dando novos horizontes ao nossos alunos. </p>
          

        </div>
       </div>

       </section>
       <section className="grupos">
        <Image
        src="/grupo.png"
        width={200}
        height={300}
        alt="grupo"
        className="areas"
        />

        <div className="cer">
          <div className="quadro">
            <span>FUNDAMENTAL II</span>
          </div>
          <div className="quadro">
            <span>ENSINO MÉDIO</span>
          </div>
        </div>

        <div className="tec">
          <div className="quadro">
            <span>ENFERMAGEM</span>
          </div>
          <div className="quadro">
            <span>RADIOLOGIA</span>
            </div>
            <div className="quadro">
            <span>VETERINÁRIA</span>
          </div>
          <div className="quadro">
            <span>FARMÁCIA</span>
          </div>
          <div className="quadro">
            <span>ANÁLISES CLÍNICAS</span>
          </div>
          <div className="quadro">
            <span>SEGURANÇA DO TRABALHO</span>
          </div>
          <div className="quadro">
            <span>RECURSOS HUMANOS</span>
          </div>
          <div className="quadro">
            <span>LOGÍSTICA</span>
          </div>
          <div className="quadro">
            <span>ADMINISTRAÇÃO</span>
          </div>
          
        </div>





       </section>
       <section className="escola">
        ddddd
       </section>
      </main>
      
    
  );
}
