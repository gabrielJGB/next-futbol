import { useStates } from '@/stores/states'
import React from 'react'

type Props = {}

const AttackMomentum = ({}: Props) => {


  const { sofaEvents } = useStates()

  console.log(sofaEvents)

  return (
    <div>AttackMomentum</div>
  )
}

export default AttackMomentum