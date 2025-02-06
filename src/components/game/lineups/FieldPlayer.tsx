import React from 'react'

type Props = {
    player: any,
    color: string,
    isThisBoca: boolean
}

const FieldPlayer = ({ player, color, isThisBoca }: Props) => {

    console.log(player);

    const playerName = "lastName" in player.athlete && player.athlete.lastName != "" ? player.athlete.lastName : player.athlete.displayName

    return (
        <div className='flex flex-col justify-center items-center gap-1 '>




            <div
                style={{ background: ` ${isThisBoca ? "rgb(30, 64, 175)" : `#${color}`} `, textShadow: "black 1px 1px 3px" }}
                className={`z-2 relative flex border-[2px] border-gray-900 justify-center items-center rounded-lg text-[18px] font-bold w-[36px] h-[36px] shadow shadow-gray-800`}
            >
                {
                    isThisBoca &&
                    <div style={{ position: "absolute", top: 0, left: 0 }}>
                        <div className='bg-blue-800 h-[10px] w-[32px] rounded-t-[6px]'></div>
                        <div className='bg-yellow-500 h-[12px] w-[32px] '></div>
                        <div className='bg-blue-800 h-[10px] w-[32px] rounded-b-[6px]'></div>
                        {/* <div style={{ height: 10.15, width: 30.5, backgroundColor: "#103279", borderTopRightRadius: 6.5, borderTopLeftRadius: 6.5 }}></div>
                        <div style={{ height: 10.15, width: 30.5, backgroundColor: "#e0a91c" }}></div>
                        <div style={{ height: 10.15, width: 30.5, backgroundColor: "#103279", borderBottomLeftRadius: 6.5, borderBottomRightRadius: 6.5 }}></div> */}
                    </div>
                }

                <div className='z-1 absolute'> {player.jersey}</div>
            </div>

            <div
                style={{ textShadow: "black 1px 1px 1px" }}
                className='md:text-sm  text-center max-w-[100px] font-bold'
            >
                {playerName}
            </div>
        </div>
    )
}

export default FieldPlayer