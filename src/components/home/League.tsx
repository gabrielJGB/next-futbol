import React from 'react'
import Game from './Game'
import { } from '@/utils/fetch'
import { formatTitle, getLogo, getStatus, getStatusColor, getTeamObject } from '@/utils/game'
import GameAlt from './GameAlt'
import { BiWorld } from 'react-icons/bi'
import { BsTrophyFill } from 'react-icons/bs'

const IMG_SIZE = 28
const ICON = 23

type League = {
    flagUrl: string | undefined,
    leagueName: string,
    games: [],
    leagueHasState: boolean,
    selectedState: string,
    leagueData: any
}

const League = ({ games, flagUrl, leagueName, leagueHasState, selectedState, leagueData }: League) => {


    return (
        <div className={`${leagueHasState || selectedState === "" ? "flex" : "hidden"}  flex-col w-full bg-[--tw-color-800]  shadow shadow-gray-950 rounded-lg transition ease-in-out`}>

            <div className='w-full flex flex-row justify-between items-center pt-2 pb-1 md:pt-2  px-2'>

                {
                    flagUrl != "-" ?
                        <img src={flagUrl} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />
                        :
                        <BsTrophyFill size={ICON} color='white' />

                }
                <div className='cursor-pointer hover:underline w-full  text-[15px] md:text-[17px] text-white font-semibold text-center'>{formatTitle(leagueName)}</div>

                {
                    flagUrl != "-" ?

                        <img src={flagUrl} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />
                        :
                        <BsTrophyFill size={ICON}  color='white' />
                }

            </div>


            <div className='flex flex-col text-black gap-2 mb-2 m-1 md:m-2'>
                {
                    games.map((game: any, i: number) => (
                        <GameAlt
                            key={i}
                            id={game.id}
                            gameState={game.status.type.state}
                            selectedState={selectedState}
                            statusColor={getStatusColor(game.status.type.state)}
                            status={getStatus(game.status.type.name, game.status.type.detail, game.date)}
                            home={getTeamObject(game.competitions[0], 0)}
                            away={getTeamObject(game.competitions[0], 1)}
                            gameData={ leagueData != undefined ? leagueData.events.filter(((event: any) => event.id === game.id))[0] : undefined}

                        />
                    ))
                }
            </div>

        </div>
    )
}

export default League