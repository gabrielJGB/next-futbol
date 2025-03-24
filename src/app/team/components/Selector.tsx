import React from 'react'

type Props = {
    showOnly: any,
    setShowOnly: any
}

const Selector = ({ showOnly, setShowOnly }: Props) => {



    return (
        <div className='grid grid-cols-3 justify-center divide-x-[1px] mb-4 divide-gray-500 rounded-lg mx-auto w-full md:w-[80%] border-gray-500 border-[1px]'>

            <div
                className={`${showOnly==="L"?"bg-white hover:text-black text-black":"bg-[--tw-color-950] text-gray-400 hover:text-white"} text-center flex-1 py-2 px-3 rounded-l-lg cursor-pointer transition-all`}
                onClick={() => setShowOnly("L")}
            >
                Local
            </div>

            <div
                className={`${showOnly==="ALL"?"bg-white hover:text-black text-black":"bg-[--tw-color-950] text-gray-400 hover:text-white"} text-center py-2 px-8 cursor-pointer transition-all`}
                onClick={() => setShowOnly("ALL")}
            >
                Todos
            </div>

            <div
                className={`${showOnly==="V"?"bg-white hover:text-black text-black":"bg-[--tw-color-950] text-gray-400  hover:text-white"} text-center py-2 px-8  rounded-r-lg cursor-pointer transition-all`}
                onClick={() => setShowOnly("V")}
            >
                Visitante
            </div>

        </div>
    )
}

export default Selector