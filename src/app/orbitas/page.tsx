"use client"
import { TipoImag } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Orbitas() {

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
            <h1>Órbitas Planetárias e Instabilidade</h1>
            <p>Velikovsky sugeriu que Vênus, Marte e outros corpos celestes poderiam ter passado perto da Terra, perturbando as órbitas planetárias de forma significativa. Isso implicava em uma instabilidade no sistema solar que não era compatível com os cálculos newtonianos de órbitas estáveis a longo prazo.</p>
            <div>
                <Image className="m-12" src={typeof (imagem.url) == 'string' ? imagem.url : ""} width={500} height={250} alt={typeof (imagem.explanation) == 'string' ? imagem.explanation : ""} />
                <p className="Ps">{imagem.explanation}</p>
            </div>
        </main>
    )

}