import { getLogo } from '@/utils/game'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    entries: any,
    homeId: string | null,
    awayId: string | null,
}
const IMG_SIZE = 23

const Table = ({ entries, homeId, awayId }: Props) => {

    const { push } = useRouter()

    const compareStats = (a: any, b: any) => {
        return a.stats.find((stat: any) => stat.name === "rank").value - b.stats.find((stat: any) => stat.name === "rank").value
    }

    entries.sort(compareStats)


    const getLogoTag = (team: any) => {

        const logo = getLogo(team, IMG_SIZE)

        return <img src={logo} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />

    }
    


    return (
        <table className='table-element text-sm w-full'>
            <tbody>

                <tr className='bg-[--tw-color-900] text-white  rounded-lg'>
                    <th className='p-1'>#</th>
                    <th className='text-start pl-2'>Equipo</th>
                    <th className='px-1'>Pts</th>
                    <th className='px-1'>PJ</th>
                    <th className='px-1'>PG</th>
                    <th className='px-1'>PE</th>
                    <th className='px-1'>PP</th>
                    <th className='px-1'>Dif</th>
                </tr>


                {
                    entries.map((team: any, i: number) => (

                        <tr
                            key={i}
                            className={`${team.id === homeId || team.id === awayId ? "bg-[--tw-color-700] hover:bg-[--tw-color-600]" : "bg-[--tw-color-800]"} hover:bg-[--tw-color-700] cursor-pointer transition-all border-b-[1px] border-[--tw-color-950] md:text-[13px] text-[12px]`}

                        >
                            <td className='font-semibold text-center py-2'>{team.stats.find((stat: any) => stat.name === "rank").value}</td>

                            <td>

                                <Link
                                    className='flex flex-row gap-1 items-center pl-1' href={`/team/${typeof (team.team) === "object" && "team" in team ? (team.team.id) : team.id}`}
                                >
                                    {getLogoTag(typeof (team.team) === "object" ? team.team : team)}

                                    <div className='text-start md:text-[13px] text-[11px]  pl-2'>{typeof (team.team) === "object" ? team.team.shortDisplayName : team.team}</div>
                                </Link>

                            </td>

                            <td className='text-center font-semibold'>{team.stats.find((stat: any) => stat.name === "points").value}</td>
                            <td className='text-center'>{team.stats.find((stat: any) => stat.name === "gamesPlayed").value}</td>
                            <td className='text-center'>{team.stats.find((stat: any) => stat.name === "wins").value}</td>
                            <td className='text-center'>{team.stats.find((stat: any) => stat.name === "ties").value}</td>
                            <td className='text-center'>{team.stats.find((stat: any) => stat.name === "losses").value}</td>
                            <td className='text-center'>{team.stats.find((stat: any) => stat.name === "pointDifferential").value}</td>
                        </tr>

                    ))
                }



            </tbody>
        </table >
    )
}

export default Table