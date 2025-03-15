import React from 'react'
import Main from '../components/Main'

type Params = {
    params: Promise<{ id: string }>
}

const Team = async ({ params }: Params) => {
    const { id } = await params
    

    return (
        
        <Main id={id} />
        
    )
}

export default Team