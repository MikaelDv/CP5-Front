"use client"
import { TipoImag } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@/styles/cardideia.css"

type objectProps = {
    id: number,
    nome: string,
    texto: string;
}

type CardProps = {
    texto: objectProps
}

export default function CardIdeia({texto}:CardProps) {
    const [imagem, setImagem] = useState<TipoImag>({ copyright: "", date: "", explanation: "", hdurl: "", media_type: "", service_version: "", title: "", url: "" });
    
    useEffect(() => {
        async function chamadaApi() {
            try {
                const response = await fetch('http://localhost:3000/api/Imagens');
                const jsonData = await response.json();
                const numeroAleatorio = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
                const indice = numeroAleatorio(0, 19);
                setImagem(jsonData[indice]);
            } catch {
                console.log("ERRO");
            }
        }

        chamadaApi()
    }, []);
    
    return (
        <div className="card-idea">
            <Image className="rounded-t-3xl object-cover h-40" src={typeof (imagem.url) == 'string' ? imagem.url : ""} width={300} height={150} alt={typeof (imagem.explanation) == 'string' ? imagem.explanation : ""}/>
            <div className="card-texto flex flex-col justify-around p-3 rounded-b-3xl h-36 dark:bg-slate-500 dark:text-slate-50">
                <h2 className="font-bold text-2xl text">{texto.nome}</h2>
                <p className="text-slate-300">{texto.texto.length > 65 ? texto.texto.substring(0,65) + '...' : texto.texto}</p>
            </div>
        </div>
  )
}
