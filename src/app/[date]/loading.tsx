import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='flex flex-col w-full gap-7'>
      <div className='grid grid-cols-3 text-center bg-[--tw-color-800] w-full h-[43px] md:rounded-lg'>
        <div className='flex items-center justify-center w-full h-full border-b-[2px] border-transparent'>---</div>
        <div className='flex items-center justify-center w-full h-full border-b-[2px] border-[--tw-primary]'>---</div>
        <div className='flex items-center justify-center w-full h-full border-b-[2px] border-transparent'>---</div>
      </div>

    <div className='w-full h-8'></div>

      <div className='flex flex-col gap-7 px-[2px] md:mx-0 mx-[2px] pt-6'>


        {
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className='animate-pulse bg-[--tw-color-800] rounded-lg shadow shadow-slate-900 h-[200px]'></div>

          ))
        }

      </div>

    </div>
  )
}

export default Loading