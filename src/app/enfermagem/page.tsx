import Image from "next/image"
import "../../app/paginas.css"


export default function Enfermagem(){
    return(
        <>
        <a id="btn_fixo" href="https://wa.me/5511973799471?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20curso%20técnico%20de%20enfermagem"target="_blank" rel="noopener noreferrer">
        <Image
        src="/whatsappLogo.png"
        width={80}
        height={80}
        alt="logoWhatsapp"
        className="logoWhatsapp"
        
        />
        </a>
        <main>
        Ainda estamos em desenvolvimento, mas pode nos chamar no link do whatsapp.
        
        </main>
        </>
    )
}