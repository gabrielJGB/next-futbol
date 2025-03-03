import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <p className='mt-4 flex items-center justify-center'>
      <div className='spinner'></div>
    </p>
  )
}

export default Loading