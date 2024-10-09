import { useState, useEffect } from "react";

export default function Contador(props){
    const [numero, setNumero] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if(numero < props.valor){
                setNumero(numero + 1)
            }
        }, 20)
    },[numero])

return(
    <>
    {numero}
    </>
)
   
}

