import { sortRoster } from '@/utils/game'
import React, { useState } from 'react'
import FieldLine from './FieldLine'
import fieldBackground from '@/assets/field2.png'
import field from '../../../assets/field2.png'

type Props = {
    game: any,

}

const Field = ({ game }: Props) => {
    const BACKGROUND_IMG = "https://raw.githubusercontent.com/gabrielJGB/futbol-11/refs/heads/main/assets/field55.png"

    const formations = [game.rosters[0].formation.split("-"), game.rosters[1].formation.split("-")]
    const rosterHome = game.rosters[0].roster.filter((elem: any) => elem.starter)
    const rosterAway = game.rosters[1].roster.filter((elem: any) => elem.starter)
    const rosters = [rosterHome, rosterAway]
    const homeColor = game.header.competitions[0].competitors[0].team.color || "white"
    const awayColor = game.header.competitions[0].competitors[1].team.color || "black"

    const switchPositions = (k: number, p1: number, p2: number) => {
        let aux = rosters[k][p1]
        rosters[k][p1] = rosters[k][p2]
        rosters[k][p2] = aux
    }

    const getLines = (k: number) => {

        rosters[k] = sortRoster(rosters[k])

        if (formations[k][1] === "2" && formations[k][2] === "3" && formations[k][3] === "1") {
            switchPositions(k, 6, 7)
            switchPositions(k, 6, 8)
        }
        if (formations[k][1] === "1" && formations[k][2] === "2" && formations[k][3] === "1" && formations[k][4] === "2") {
            switchPositions(k, 6, 8)
            switchPositions(k, 5, 7)
            switchPositions(k, 6, 7)
        }
        if (formations[k][1] === "4" && formations[k][2] === "2" && formations[k][3] === "1") {
            switchPositions(k, 9, 10)

        }
        if (formations[k][1] === "2" && formations[k][2] === "2" && formations[k][3] === "2") {
            switchPositions(k, 5, 6)
            switchPositions(k, 6, 7)
        }

        if (formations[k][1] === "1" && formations[k][2] === "4" && formations[k][3] === "1") {
            switchPositions(k, 5, 6)
            switchPositions(k, 5, 7)
            switchPositions(k, 5, 8)

        }

        if (formations[k][1] === "3" && formations[k][2] === "1" && formations[k][3] === "2") {
            switchPositions(k, 7, 8)

        }


        //   let lines:any[] = []
        //   formations[k].unshift("1")
        //   formations[k].forEach((playersInLine:any, i:number) => {
        //       const  x = rosters[k].splice(0, playersInLine)
        //       console.log(x);

        //       lines.push(x)
        //   })

        formations[k].unshift("1")
        const _lines = formations[k].map((playersInLine: any, i: number) => {
            return rosters[k].splice(0, playersInLine)
        })

        // console.log("F: ", k, _lines);

        return _lines
    }


    const [lines] = useState<any>([getLines(0), getLines(1)])






    return (

        <div className='overflow-x-auto'>
            <div
                style={{
                    backgroundImage: `url("/field2.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "space",
                    
                }}
                className='z-30 top-0 relative flex  flex-row md:w-full bg-field bg-contain bg-no-repeat w-[850px] rounded-lg shadow shadow-gray-900 bg-center px-[3px]'

            >
                {
                    [0, 1].map((j, k) => (

                        <div

                            className={`flex ${k === 0 ? "flex-row" : "flex-row-reverse"}  justify-evenly gap-1 md:w-1/2 w-full bg-center h-[500px]`}
                        // style={{backgroundImage: `url(${field})` }}

                        >

                            {/* <img src={BACKGROUND_IMG} className={`relative top-0 bg-cover bg-center ${k===1?"rotate-180":""}`} alt="" /> */}


                            {/* <img
                                src="https://raw.githubusercontent.com/gabrielJGB/futbol-11/refs/heads/main/assets/field55.png"
                                alt=""
                                className=''
                                style={{ transform: k === 1 ? [{ rotateY: '180deg' }] : [] }}
                            /> */}

                            {
                                lines[k].map((line: any, i: number) => (

                                    <FieldLine
                                        key={i}
                                        line={line}
                                        lineIndex={i}
                                        color={k === 0 ? homeColor : awayColor}
                                        isHome={k === 0}
                                        playersInLine={formations[k].length + 1}
                                        isThisBoca={game.header.competitions[0].competitors[k].team.id === "5"}
                                    />

                                ))
                            }


                            {/* 
                        {
                            lines[k].map((line: any, i: number) => (

                            ))
                        } */}

                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default Field