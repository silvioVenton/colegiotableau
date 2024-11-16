// Arquivo RootLayout.tsx


import "./globals.css";
import Image from "next/image";
import React, { useState } from 'react';
import { Button} from "@nextui-org/button";
import Link from "next/link";
import Menu from "./components/BotaoSuspenso"
import BotaoModal from "./components/ButtonModal"







export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  

  return (
    <html lang="pt-br">
      <body>
        
      
        <Image
          src="/tableauAzul.png"
          width={100}
          height={80}
          alt="logotipo colegio tableau"
          className="log_tableauMobile"
        />

        <nav className="navbar">
        
          <Image
            src="/logotableau.png"
            width={100}
            height={80}
            alt="logotipo colegio tableau"
            className="log_tableau"
          />
          <div className="flex flex-wrap gap-5 btn">
            <Link href="/">
              <Button color="primary">Home</Button>
            </Link>
            <Link href="/tecnico">
              <Button color="primary">Cursos Técnico</Button>
            </Link>
            <Link href="/cer">
              <Button color="primary">Ensino Fundamental e Médio</Button>
            </Link>

           <BotaoModal></BotaoModal>

            
            
          </div>

          <Image
            src="/mackNegativor.png"
            width={200}
            height={80}
            alt="logotipo mackenzie"
            className="log_mack"
          />

          
          <Menu></Menu>
         
        </nav>
        

        {children}

        <footer>
          <div className="footer_primeiroBloco">
            <h1>Colégio Tableau Jundiaí</h1>
            <hr />
            <span>Rua Doutor Leonardo Cavalcante, 328/334</span>
            <span>Centro - Jundiaí / SP</span>
          </div>
          <div className="footer_colegio">
            <dl>
              <dt>Tableau Ensino</dt>
              <dd>Fundamental</dd>
              <dd>Médio</dd>
              <dt>Tableau Técnico</dt>
              <dd>Enfermagem</dd>
              <dd>Radiologia</dd>
              <dd>Veterinária</dd>
              <dd>Análises Clínicas</dd>
              <dd>Segurança do Trabalho</dd>
            </dl>
          </div>

          <div className="footer_redes">
            <h1>Nos siga nas Redes Sociais</h1>
            <div className="footer_rede_icon">
              <Image src="/icon/logo_face.png" width={40} height={40} alt="logo facebook" />
              <Image src="/icon/logo_insta.png" width={40} height={40} alt="logo instagram" />
            </div>
          </div>

          <div className="footer_contato">
            <h1>Contatos</h1>
            <hr />
            <h2>(11) 4521-1444</h2>
            <h2>Técnico (11) 97379-9471</h2>
            <h2>Fundamental e Médio (11) 99120-5350</h2>
          </div>
        </footer>
      </body>
    </html>
  );
}
