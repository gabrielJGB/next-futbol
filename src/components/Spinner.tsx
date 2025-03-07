import React from 'react'

type Props = {}

const Spinner = (props: Props) => {
    return (
        <div className='flex items-center justify-center mt-4 w-full'>
            <div className='spinner'></div>
        </div>
    )
}

export default Spinner