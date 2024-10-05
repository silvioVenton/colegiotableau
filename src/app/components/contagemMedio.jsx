"use client"
import Contador from "./contador"
import "../escola.css";
import Image from "next/image";

export default function ContagemMedio(){
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
        <h1><Contador valor = "15000"/></h1>
        <h3>Alunos de ensino .</h3>
        <h2>Médio formados</h2>
        </div>
       </div>
    )
}