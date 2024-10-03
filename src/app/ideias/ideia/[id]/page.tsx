import { textos } from '@/data/textos'
import React from 'react'
import "@/styles/pagetexto.css"

export default function Page({ params }: { params: { id: number } }) {
    const listaTextos = textos;
    const texto = listaTextos.find(t => t.id == params.id)

    return (
        <div className="page-texto">
            <h1 className="h1-texto">{texto ? texto.nome : 'Texto não encontrado'}</h1>
            <p className="p-texto">&emsp;{texto ? texto.texto : "Conteúdo não disponível."}</p>
        </div>
    );
}
