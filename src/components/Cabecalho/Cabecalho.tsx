import Image from "next/image";
import Menu from "../Menu/Menu";
import "@/styles/cabecalho.css";

// https://api.nasa.gov/planetary/apod?count=1&api_key=TjenLEVuZAd7bT0ahlUfeyhUUgVEvaRyQTdmHBJB

export default function Cabecalho(){
    return(
        <header className="cabecalho">
            <Image src="/img/atronaut-svgrepo-com.svg" alt="Astronauta Logo." width={50} height={50}/>
            <Menu/>
        </header>
    )
}