"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
    league: any

}


const MenuSection = ({ league }: Props) => {

    // const [imgUrl, setImgUrl] = useState<string | undefined>(undefined)


    const url = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/${league.slug.split(".")[0]}.png&scale=crop&cquality=40&w=40&h=40`





    return (
        <Link href={`/league/${league.slug}`} className='hover:bg-[--tw-color-700] py-2 px-1 flex flex-row items-center gap-2 '>


            <img src={url} width={20} height={25} />
            <div className='text-sm'>{league.name}</div>

        </Link>
    )
}

export default MenuSection