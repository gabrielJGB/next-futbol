import { useStates } from '@/stores/states'
import React from 'react'

type Props = {}

const AttackMomentum = ({}: Props) => {


  const { sofaEvents } = useStates()

  console.log(sofaEvents)

  return (
    <div className="p-2 rounded-lg bg-[--tw-color-800] text-sm font-bold">Attack Momentum</div>
  )
}

export default AttackMomentum