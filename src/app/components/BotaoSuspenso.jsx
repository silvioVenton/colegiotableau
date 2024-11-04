"use client"; // Transformando o componente em Client Component
import Image from "next/image";
import "../globals.css";
import { useState } from "react";



export default function Menu() {
    const [ativo, setAtivo] = useState(false);
const abrir = ()=>{
    setAtivo(!ativo)
    
}
const muda = ativo ? 'menu_suspenso menu_suspensoOpen':'menu_suspenso';
    

    return (
       <>
            <Image onClick={abrir} 
                src="/barras.png"
                width={30}
                height={50}
                alt="barras de menu"
                className="barras"
            />
            <div className={muda} >
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/cer"><li>Ensino Fundamental e Médio</li></a>
                <a href="/enfermagem"><li>Auxiliar e Técnico de Enfermagem</li></a>
                <a href="/analisesclinica"><li>Análises Clínicas</li></a>
                <a href="/radiologia"><li>Radiologia</li></a>
                <a href="/veterinaria"><li>Análises Clínicas</li></a>
                <a href="/segurancadotrabalho"><li>Segurança do Trabalho</li></a>
                
            </ul>
            <button style={{position:"absolute", bottom:'1em', right:'2rem', border:'solid #fed20b 1px', margin:'0.5rem',
  padding: '.5rem', borderRadius:'100%' }} onClick={abrir}>X</button>
        </div>
            
        </>
    );
}
