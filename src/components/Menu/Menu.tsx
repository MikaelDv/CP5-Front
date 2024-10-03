import Link from 'next/link'
import React from 'react'
import '@/styles/menu.css'

export default function Menu() {
    return (
        <div>
            <nav>
                <ul className="link-list">
                    <li className='mx-12'><Link className='Link' href="/">Home</Link></li>
                    <li className='mx-12'><Link className='Link' href="/ideias">Ideias</Link></li>
                    <li className='mx-12'><Link className='Link' href="/calculo">Cálculo</Link></li>
                </ul>
            </nav>
        </div>
    )
}