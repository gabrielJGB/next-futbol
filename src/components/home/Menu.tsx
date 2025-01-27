import sections from '@/data/menu.json'
import Link from 'next/link'
import MenuSection from './MenuSection'

type Props = {}



const Menu =  (props: Props) => {


    

    return (
        <div className='self-start hidden md:block w-[270px] p-2 text-center  bg-[--tw-color-900] rounded shadow shadow-slate-900'>

            {
                sections.map((section: any, i: number) => (
                    <div key={i} className='flex flex-col divide-y-[1px] divide-[--tw-color-800] '>
                        <div className='bg-[--tw-color-950] font-bold p-2'>{section.section_name} </div>

                        {
                            section.leagues.map( (league: any, i: number) => (
                                <MenuSection key={i} league={league}/>
                            ))
                        }

                    </div>
                ))
            }

        </div>
    )
}

export default Menu


