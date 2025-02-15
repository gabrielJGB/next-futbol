import React from 'react'
import Info from './tabs/Tab_Overview'
import Commentary from './tabs/Tab_Commentary'
import Lineups from './tabs/Tab_Lineups'
import Positions from './tabs/Tab_Positions'
import Prev from './tabs/Tab_Prev'
import Stats from './tabs/Tab_Stats'
import Shootout from './tabs/Tab_Shootout'
import Videos from './tabs/Tab_Videos'

type Props = {
  selectedTab: number,
  game: any,
  sofaId:any
}

const TabContent = ({ game, selectedTab,sofaId }: Props) => {



  const getSelected = () => {
    switch (selectedTab) {
      case 0:
        return <div className='block md:hidden'><Info game={game} sofaId={sofaId}/></div>
      case 1:
        return <Lineups game={game} />
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
        return <Videos game={game} />

    }
  }


  return (


    <div>
      {getSelected()}
    </div>

  )
}

export default TabContent