"use client"
import Contador from "./contador"
import "../escola.css";
import Image from "next/image";

export default function ContagemSeg(){
    return(
        <div className="contagem">
        <Image
        src="/maisDe.png"
        width={60}
        height={80}
        alt="mais de"
        className="img_maisde"
        />
        <div className="contador_valores">
        <h1><Contador valor = "6000"/></h1>
        <h3>Alunos de .</h3>
        <h2>Segurança do trabalho</h2>
        </div>
       </div>
    )
}