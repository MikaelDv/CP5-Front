import Image from "next/image";

export default function Cabecalho(){
    return(
        <header className="cabecalho">
            <Image src="/img/atronaut-svgrepo-com.svg" alt="Astronauta Logo." width={50} height={50}/>
        </header>
    )
}