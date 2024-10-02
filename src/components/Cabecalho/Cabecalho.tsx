import Image from "next/image";
import Menu from "../Menu/Menu";
import Link from "next/link";
import "@/styles/cabecalho.css";

export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <Link href={"/"} ><Image src="/img/atronaut-svgrepo-com.svg" alt="Astronauta Logo." width={50} height={50} /></Link>
            <Menu />
        </header>
    )
}