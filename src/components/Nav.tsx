import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className="bg-[--tw-color-800] font-bold  p-3 ">
      <Link href={"/"}>
        Futbol 1
      </Link>
    </nav>
  )
}

export default Nav