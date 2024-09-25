import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from "next/link";
import "./escola.css";

export default function Home() {
  return (

    
    
      <main >
       <section className="content_inf">
       <Link href="https://wa.me/5511991205350?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Ensino%20fundamental%20e%20m%C3%A9dio." target="_blank">
            <Image
            src="/btn_fundamental.png"
            width={300}
            height={50}
            alt="botao fundamental e medio"
            className="btn_fundMobile"
            
            />
            </Link>
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

        <Link href="#">
        <Button className ="btn_matriculas" color="primary">
          <h1>Matrículas Abertas</h1>
        </Button>
        
        </Link>
        </div>

        <section className="direitaFund">
          <div className="setBtnFund">
            <Link href="https://wa.me/5511991205350?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Ensino%20fundamental%20e%20m%C3%A9dio." target="_blank">
            <Image
            src="/btn_fundamental.png"
            width={300}
            height={50}
            alt="botao fundamental e medio"
            className="btn_fund"
            
            />
            </Link>
            </div>
        <div className="containerAlunasBolsa" style={{}}>
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
        </div>
        </section>

       <Image
       src="/relevo3.png"
       width={1200}
       height={150}
       alt="relevo "
       className="tecnicos22"
       />
       
       </section>


       <section className="tecnicosGeral">
        <Link href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20técnico" target="_blank">
       <Image
          src="/btn_whatsTecnico2.png"
          width={50}
          height={200}
          alt="botao Tecnico whats"
          className="btnTec"
          
          />
          </Link>
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
              src="/cursoTec.png"
              width={500}
              height={500}
              alt="curso tecnico"
              className="cursoTec"
              />
          
          
            <p>É com muito orgulho que o Colégio Tableau tem a satisfação em ter formado milhares de profissionais em nossas diversas areas de ensino técnico e dando novos horizontes ao nossos alunos. </p>
         
          

        </div>
        
        <div className ="btn_inscricoes">
          <Link href="#">
            <Button  color="primary">
              <h1>Inscrições Abertas</h1>
            </Button>
            
            </Link>
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
        <div className="escolaVemsertableau">
       <Image
        src="/vemsertableau.png"
        width={1000}
        height={300}
        alt="vem ser tableau"
        className="img_vemsertableau"
       />
       <Image
        src="/vemsertableauMobile.png"
        width={1000}
        height={300}
        alt="vem ser tableau"
        className="img_vemsertableauMobile"
       />
       </div>
       </section>
      </main>
      
    
  );
}
