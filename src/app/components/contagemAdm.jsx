"use client"
import Contador from "./contador"
import "../escola.css";
import Image from "next/image";

export default function ContagemAdm(){
    return(
        <div className="contagem">
        <Image
        src="/mais.png"
        width={60}
        height={80}
        alt="mais de"
        className="img_maisde"
        
        />
        <div className="contador_valores">
        
        <h1><Contador valor = "5000"/></h1>
        <h3>Alunos da area de </h3>
        <h2>Administração</h2>
        </div>
       </div>
    )
}