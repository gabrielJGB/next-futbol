import React from 'react'

type Props = {}

const Info = (props: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='shadow shadow-gray-800 bg-[--tw-color-800] rounded-lg p-2 py-[100px]'>Información</div>
      <div className='shadow shadow-gray-800 bg-[--tw-color-800] rounded-lg p-2 py-[100px]'>Video Resumen</div>
      <div className='shadow shadow-gray-800 bg-[--tw-color-800] rounded-lg p-2 py-[100px]'>Attack Momentum</div>
      <div className='shadow shadow-gray-800 bg-[--tw-color-800] rounded-lg p-2 py-[100px]'>Noticias Liga</div>
    </div>
  )
}

export default Info