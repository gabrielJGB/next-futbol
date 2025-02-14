import React from 'react'
import FieldPlayer from './FieldPlayer'

type Props = {
    line: any,
    lineIndex: number,
    color: string,
    isHome: boolean,
    playersInLine: number,
    isThisBoca: boolean,
}

const FieldLine = ({ line, lineIndex, color, isHome, playersInLine, isThisBoca }: Props) => {

    return (
        <div className={`flex ${isHome ? "flex-col" : "flex-col-reverse"} justify-evenly gap-1 `}>
            {
                line.map((player: any, p: number) => (
                    <FieldPlayer
                        key={p}
                        color={color}
                        player={player}
                        isThisBoca={isThisBoca}
                        plays={"plays" in player ? player.plays : false}
                        subbedOutFor={"subbedOutFor" in player ? player.subbedOutFor : false}
                    />
                ))
            }
        </div>
    )

}

export default FieldLine