import React from 'react'

type Props = {}

const Loading = (props: Props) => {
    return (
        <div className=' mx-0 md:mx-10 my-0 md:my-6 flex md:flex-row flex-col gap-0 md:gap-6 transition-all'>

            <div className='w-full md:w-[40%]  flex flex-col gap-4 '>

                <div className='flex flex-col gap-4  sm:mx-0'>

                    <div className='rounded-none md:rounded-lg bg-[--tw-color-800]  shadow shadow-slate-900 h-[180px]'></div>


                    <div className='animate-pulse rounded-lg bg-[--tw-color-800]  shadow shadow-slate-900 h-[220px]'></div>
                    <div className='animate-pulse rounded-lg bg-[--tw-color-800]  shadow shadow-slate-900 h-[220px]'></div>
                    <div className='animate-pulse rounded-lg bg-[--tw-color-800]  shadow shadow-slate-900 h-[220px]'></div>
                    <div className='animate-pulse rounded-lg bg-[--tw-color-800]  shadow shadow-slate-900 h-[220px]'></div>

                </div>


            </div>


            <div className='w-full md:w-[80%]'>
                <div className='animate-pulse flex flex-row self-start shadow-none mb-2 md:shadow shadow-gray-900 md:overflow-hidden overflow-x-scroll w-full mx-auto rounded bg-[--tw-color-800] h-[43px] text-xs font-bold '>

                </div>

                <div className='animate-pulse mt-4 w-full h-[500px] bg-green-700 rounded-lg'>

                </div>

                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='bg-[--tw-color-800] col-span-1 h-[600px] rounded-lg '></div>
                    <div className='bg-[--tw-color-800] col-span-1 h-[600px]  rounded-lg'></div>
                </div>

            </div>


        </div>
    )
}

export default Loading