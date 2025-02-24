import React from 'react'

type Props = {
    showKeyEvents: any,
    setShowKeyEvents: any
}

const Selector = ({ showKeyEvents, setShowKeyEvents }: Props) => {



    return (
        <button
            className={`${showKeyEvents?"bg-black border-gray-400 text-white":"bg-transparent text-gray-600 hover:text-gray-400"} p-2 mt-2  mb-4 rounded-lg border-[1px] border-gray-700 cursor-pointer text-sm `}
            onClick={() => setShowKeyEvents(!showKeyEvents)}
        >
            Eventos destacados
        </button>
    )
}

export default Selector