import React from 'react'
import Info from './tabs/Info'
import Commentary from './tabs/Commentary'
import Lineups from './tabs/Lineups'
import Positions from './tabs/Positions'
import Prev from './tabs/Prev'
import Stats from './tabs/Stats'
import Shootout from './tabs/Shootout'
import Videos from './tabs/Videos'

type Props = {
  selectedTab: number
}

const TabContent = ({ selectedTab }: Props) => {



  const getSelected = () => {
    switch (selectedTab) {
      case 0:
        return <div className='block md:hidden'><Info /></div>
      case 1:
        return <Lineups />
      case 2:
        return <Prev />
      case 3:
        return <Shootout />
      case 4:
        return <Commentary />
      case 5:
        return <Stats />
      case 6:
        return <Positions />
      case 7:
        return <Videos />

    }
  }


  return (

    <div className='w-full px-1 md:px-0 pt-1'>

      {getSelected()}

    </div>
  )
}

export default TabContent