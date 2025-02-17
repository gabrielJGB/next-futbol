import React from 'react'
import Game from './Game'
import { } from '@/utils/fetch'
import { getLogo, getStatus, getStatusColor } from '@/utils/game'
import GameAlt from './GameAlt'

const IMG_SIZE = 24

type League = {
    flagUrl: string | undefined,
    leagueName: string,
    games: [],
    leagueHasState:boolean,
    selectedState:string,
}

const League = ({ games,flagUrl,leagueName,leagueHasState,selectedState }: League) => {
    
    

    const getTeamObject = (game: any, i: number) => {
        return {
            id: game.competitors[i].id,
            name: game.competitors[i].team.shortDisplayName,
            logoURL: game.competitors[i].team.logo,
            score: game.status.type.state != "pre" ? game.competitors[i].score : "",
            scorers: game.details.filter((d: any) => d.team.id === game.competitors[i].id && d.scoringPlay && !d.shootout),
            redCards: game.details.filter((d: any) => d.team.id === game.competitors[i].id && d.redCard),
            winner:game.competitors[i].winner,
            logo:getLogo(game.competitors[i],45)
        }
    }


    return (
        <div className={`${leagueHasState || selectedState === ""?"flex":"hidden"}  flex-col w-full bg-[--tw-color-800]  shadow shadow-gray-950 rounded transition ease-in-out`}>

             <div className='w-full flex flex-row justify-between items-center pt-1  md:pt-2 px-1 md:px-2'>
                
                {
                    flagUrl &&
                    <img src={flagUrl} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />
                    
                }
                <div className='cursor-pointer hover:underline w-full text-sm md:text-[16px] text-white font-bold text-center'>{leagueName}</div>

                {
                    flagUrl &&
                    <img src={flagUrl} alt="Logo" width={IMG_SIZE} height={IMG_SIZE} />
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

                        />
                ))
            }
            </div>

        </div>
    )
}

export default League