import CardIdeia from '@/components/CardIdeia/CardIdeia';
import { textos } from '@/data/textos'
import Link from 'next/link';
import React from 'react'

export default function Ideias() {
    const listaTextos = textos;

    return (
        <div className="ideias-wrapper">
            <ul className='flex gap-12'>
                {listaTextos.map((t) => (
                    <Link>
                        <CardIdeia texto={t}/>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
