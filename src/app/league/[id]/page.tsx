import React from 'react'
import Main from '../components/Main'
import { fetchLeague } from '@/utils/fetch'

type Params = {
  params: Promise<{ id: string }>
}

const League = async ({ params }: Params) => {
  const { id } = await params
  
  return (
    

       <Main  id={id}/>
    
  )
}

export default League