import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className="flex flex-row items-center justify-between  bg-[--tw-color-800] p-3 ">
      <Link
        href={"/"}
        className='px-2 py-1 rounded-lg font-bold hover:text-gray-300'
      >
        FÚTBOL 1
      </Link>

      
      <div className='text-xs text-gray-400 font-normal focus:bg-[--tw-color-900]'>Buscar</div>

      <div></div>

    </nav>
  )
}

export default Nav