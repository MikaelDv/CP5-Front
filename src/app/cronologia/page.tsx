"use client"
import { TipoImag } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Cronologia() {

    const [imagem, setImagem] = useState<TipoImag>({ copyright: "", date: "", explanation: "", hdurl: "", media_type: "", service_version: "", title: "", url: "" });
    useEffect(() => {
        async function chamadaApi() {
            try {
                const response = await fetch('http://localhost:3000/api/Imagens');
                const jsonData = await response.json();
                const numeroAleatorio = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
                const indice = numeroAleatorio(0, 9);
                setImagem(jsonData[indice]);
            } catch {
                console.log("ERRO");
            }
        }

        chamadaApi()
    }, []);
    return (
        <main>
            <h1>Cronologia dos Eventos</h1>
            <p>Ele questionou a cronologia aceita de eventos históricos e astronômicos,
                propondo que certos eventos catastróficos ocorreram em tempos muito mais recentes do que a ciência convencional sugere.
                A ideia de que planetas poderiam ter mudado de órbita tão recentemente desafiava as teorias astronômicas da época,
                que se baseavam em cálculos de órbitas estáveis por milhões de anos.
            </p>
            <div>
                <Image className="m-12" src={typeof (imagem.url) == 'string' ? imagem.url : ""} width={500} height={250} alt={typeof (imagem.explanation) == 'string' ? imagem.explanation : ""} />
                <p className="Ps">{imagem.explanation}</p>
            </div>
        </main>
    )

}