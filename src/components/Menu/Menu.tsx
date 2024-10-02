import Link from 'next/link'
import React from 'react'
import '@/styles/menu.css'

export default function Menu() {
    return (
        <div>
            <nav>
                <ul className="link-list">
                    <li className='mx-12'><Link className='Link' href="/">Home</Link></li>
                    <li className='mx-12'><Link className='Link' href="/orbitas">Órbitas</Link></li>
                    <li className='mx-12'><Link className='Link' href="/cronologia">Cronologia</Link></li>
                    <li className='mx-12'><Link className='Link' href="/forcas">Forças</Link></li>
                    <li className='mx-12'><Link className='Link' href="/velocidade">Velocidade</Link></li>
                    <li className='mx-12'><Link className='Link' href="/calculo">Calculo</Link></li>
                </ul>
            </nav>
        </div>
    )
}