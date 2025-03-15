"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

type Props = {}

const Nav = (props: Props) => {

  const [focus, setFocus] = useState(false)
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  const [query, setQuery] = useState("");
  const router = useRouter();


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="flex flex-row items-center justify-between  bg-[--tw-color-800]">
      <Link
        href={"/"}
        className='self-stretch flex items-center pl-2 pr-6 font-bold  active:text-gray-300 md:hover:bg-[--tw-color-600] active:bg-[--tw-color-600] bg-[--tw-color-700] text-white transition-all'
        style={{ clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
      >
        FÚTBOL 1
      </Link>

 
 

      <div className={`flex flex-row gap-2 border-[1px] my-2 items-center bg-[--tw-color-900] ${focus ? "border-[--tw-color-600]" : "border-[--tw-color-900]"} border-[2px] rounded-lg p-1 px-2`}>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar"
            onFocus={onFocus}
            onBlur={onBlur}
            className='outline-none text-xs bg-[--tw-color-900] focus:bg-[--tw-color-900] focus:text-white text-gray-400 px-2 py-1 transition-all rounded'
          />
          <button type="submit" >
            <FaMagnifyingGlass
              size={17}
              color={focus ? "white" : "#1e293b"}
              className='cursor-pointer'
            />
          </button>
        </form>
        {/* <input
            type="text"
            placeholder='Buscar'
            onFocus={onFocus}
            onBlur={onBlur}
            className='outline-none text-xs bg-[--tw-color-800] focus:bg-[--tw-color-900] p-2 transition-all rounded'
            onSubmit={(e) => { 
              e.preventDefault()
              console.log(e.currentTarget.value);
              
              // push(`/design?query=${e.currentTarget.value}`)
             }}

          />
          {
            <button type='submit' >
              <FaMagnifyingGlass
                size={17}
                color={focus ? "white" : "#1e293b"}
                className='cursor-pointer'
              />
            </button>
          } */}

      </div>

      <div></div>
    </nav>
  )
}

export default Nav