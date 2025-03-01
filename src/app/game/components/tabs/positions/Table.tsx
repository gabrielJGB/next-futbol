import { getLogo } from '@/utils/game'
import React from 'react'

type Props = {
    entries: any
}
const IMG_SIZE = 23

const Table = ({ entries }: Props) => {

    console.log(entries);
    

    const getLogoTag = (team: any) => {
        
        const logo = getLogo(team, IMG_SIZE)

        return <img src={logo} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />

    }

    return (
        <table className='table-element text-sm w-full'>
            <tbody>

                <tr className='bg-[--tw-color-400] text-black'>
                    <th className='p-1'>#</th>
                    <th className='text-start pl-2'>Equipo</th>
                    <th>Pts</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>Dif</th>
                </tr>


                {
                    entries.map((team: any, i: number) => (
                        <tr key={i} className={`${i%2===0?"bg-[--tw-color-800]":"bg-[--tw-color-900]"} border-b-[1px] border-[--tw-color-950] md:text-[14px] text-[12px]`}>

                            <td className='font-semibold text-center py-2'>{team.stats.find((stat: any) => stat.name === "rank").value}</td>

                            <td>
                                <div className='flex gap-1 items-center pl-1'>

                                    {getLogoTag(typeof (team.team) === "object" ? team.team : team)}

                                    <div className='text-start md:text-[13px] text-[11px]  pl-2'>{typeof (team.team) === "object" ? team.team.shortDisplayName : team.team}</div>
                                </div>
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
        </table>
    )
}

export default Table