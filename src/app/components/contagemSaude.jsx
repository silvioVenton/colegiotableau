"use client"
import Contador from "./contador"
import "../escola.css";
import Image from "next/image";

export default function ContagemSaude(){
    return(
        <div className="contagem">
            <Image
        src="/maisDe.png"
        width={60}
        height={80}
        alt="mais de"
        
        />
        
        <div className="contador_valores">
        <h1><Contador  valor = "20000"/></h1>
        <h3>Alunos da area da .</h3>
        <h2>Saúde</h2>
        </div>
       </div>
    )
}