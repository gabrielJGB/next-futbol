"use client"
import Link from 'next/link'
import React from 'react'

type Props = {}

const Error = (props: Props) => {
    return (
        <div className='mx-auto w-full text-center'>
            <h3 className='my-10 text-3xl'>Ha ocurido un error</h3>
            <Link href={"/"} className='text-sm hover:underline'>Volver a la pagina principal</Link>
        </div>
    )
}

export default Error