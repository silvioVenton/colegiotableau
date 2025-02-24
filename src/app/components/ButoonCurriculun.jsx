"use client"

import Link from "next/link"
import { useState } from "react"

export default function BotaoModalCurriculum(){
    
    return(
        <Link href="/trabalheconosco">
            <button 
                      style={{
                        backgroundColor: '#003366', /* Azul */
                        color: '#FFD700', /* Amarelo */
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                      }}>
                Trabalhe conosco

          
            </button>
            
            
            
            
        </Link>
    )
}