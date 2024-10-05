import Image from "next/image"
import "../../app/paginas.css"
export default function Fundamental(){
    return(
        <>
        <a id="btn_fixo" href="https://wa.me/5511991205350?text=Estou%20vindo%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20Fundamental%20ou%20Médio"target="_blank" rel="noopener noreferrer">
        <Image
        src="/whatsappLogo.png"
        width={80}
        height={80}
        alt="logoWhatsapp"
        className="logoWhatsapp"
        
        />
        </a>
        <main>
        Estamos construindo esta pagina.
        </main>
        </>
    )
}