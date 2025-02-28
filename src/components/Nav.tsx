import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className="bg-[--tw-color-800] font-bold  p-3 ">
      <Link href={"/"} className='border-[1px] px-2 py-1 border-[--tw-color-700] hover:border-gray-400 rounded-lg'>
        Fútbol 1
      </Link>
    </nav>
  )
}

export default Nav