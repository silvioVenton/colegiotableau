"use client"

import { input } from "@nextui-org/theme"
import { useState } from "react"




export default function Pesquisa(){
    const [curso, setCurso] = useState([])
    const [filtro, setFiltro] = useState("")
    
    return(
        <>
        <input type="text" placeholder="busca curso" value={filtro} onChange={(e) => setFiltro(e.target.value)} />

        </>
    
    )
}