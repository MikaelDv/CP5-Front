import Image from "next/image";
import Menu from "../Menu/Menu";
import Link from "next/link";
import "@/styles/cabecalho.css";

// https://api.nasa.gov/planetary/apod?count=1&api_key=TjenLEVuZAd7bT0ahlUfeyhUUgVEvaRyQTdmHBJB

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <Image src="/img/atronaut-svgrepo-com.svg" alt="Astronauta Logo." width={50} height={50} />
            <Menu />
            <div className="text-center">
                <li className='list-disc mx-12'><Link className='Link' href="/">Home</Link></li>
                <li className='list-disc mx-12'><Link className='Link' href="/orbitas">Órbitas</Link></li>
                <li className='list-disc mx-12'><Link className='Link' href="/cronologia">Cronologia</Link></li>
                <li className='list-disc mx-12'><Link className='Link' href="/forcas">Forças</Link></li>
                <li className='list-disc mx-12'><Link className='Link' href="/velocidade">Velocidade</Link></li>
                <li className='list-disc mx-12'><Link className='Link' href="/calculo">Calculo</Link></li>
            </div>
        </header>
    )
}