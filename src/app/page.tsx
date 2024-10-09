"use client"

import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/button";
import Link from "next/link";
import "./escola.css";
import ContagemMedio from "./components/contagemMedio"
import ContagemSaude from "./components/contagemSaude"
import ContagemAdm from "./components/contagemAdm"
import ContagemSeg from "./components/contagemSeg"
import Cadastro from "./components/cadastro"


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
          <p>Para isso é necessário um presente estruturado e com projetos que vão além da educação 
para um desenvolvimento de habilidades essenciais como pensamento crítico, criatividade e responsabilidade. 
E nós do Tableau preparamos nossos jovens para buscar seus objetivos,
enfrentar desafios e aproveitar oportunidades para alcançar  um futuro de excelência. </p>

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
        <div className="containerAlunasBolsa">
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
          
          
            <p>É com muito orgulho que o Colégio Tableau tem a satisfação em ter formado milhares de profissionais em nossas diversas áreas de ensino técnico e dando novos horizontes ao nossos alunos. </p>
         
          

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
       <Cadastro></Cadastro>

       <section className="grupos">
        <Image
        src="/grupo.png"
        width={200}
        height={300}
        alt="grupo"
        className="areas"
        />

        

        <div className="tec">
        
          <div className="quadro">
          <Link href="./cer"> <span>CER</span></Link>
            <h3>Fundamental e Médio</h3>
          </div>
        
        
          <div className="quadro">
          <Link href="./enfermagem"><span>ENFERMAGEM</span></Link>
          </div>
          
          <div className="quadro">
            <Link href="./radiologia"><span>RADIOLOGIA</span></Link>
            </div>
            <div className="quadro">
            <Link href="./veterinaria"><span>VETERINÁRIA</span></Link>
          </div>
          
          <div className="quadro">
            <Link href="./analisesclinica"><span>ANÁLISES CLÍNICAS</span></Link>
          </div>
          <div className="quadro">
            <Link href="./segurancadotrabalho"><span>SEGURANÇA DO TRABALHO</span></Link>
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
        
       </div >
      
       <section className="contadores">
       <ContagemMedio />
       
       <ContagemSaude />

       <ContagemAdm />

       <ContagemSeg />

       </section>

       
       </section>

       <section>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6753952185995!2d-46.89178412455903!3d-23.182044547766655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf26894b5542f5%3A0x3c5830a2783f7d77!2sR.%20Dr.%20Leonardo%20Cavalcanti%2C%20334%20-%20Centro%2C%20Jundia%C3%AD%20-%20SP%2C%2013201-013!5e0!3m2!1spt-BR!2sbr!4v1728140856451!5m2!1spt-BR!2sbr" width="100%" height="450"></iframe>
       </section>
      </main>
      
    
  );
}
