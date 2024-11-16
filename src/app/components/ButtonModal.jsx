"use client"
import Modal from "./Modal"
import Link from "next/link";
import { useState } from "react";
export default function BotaoModal(){
    const [isModalOpen, setModalOpen] = useState(false);
    return(

        <Link href="#">
            <button onClick={() => setModalOpen(true)}
        style={{
          backgroundColor: '#003366', /* Azul */
          color: '#FFD700', /* Amarelo */
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Área restrita
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
            </Link>

    )
}
