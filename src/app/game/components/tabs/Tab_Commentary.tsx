import React, { useState } from 'react'
import Events from './commentary/Events'
import KeyEvents from './commentary/KeyEvents'
import Selector from './commentary/Selector'

type Props = {
  game: any
}

const Commentary = ({ game }: Props) => {
  const events = "commentary" in game ? game.commentary : false
  const keyEvents = "keyEvents" in game ? game.keyEvents : false
  const [showKeyEvents, setShowKeyEvents] = useState(!events)

  return (
    <div className='px-1'>

      {
        events && keyEvents &&
        <Selector showKeyEvents={showKeyEvents} setShowKeyEvents={setShowKeyEvents} />
      }

      {
        events &&  !showKeyEvents && <Events events={events} teams={ game.boxscore.teams}/>
      }

      {
        keyEvents && showKeyEvents && <KeyEvents keyEvents={keyEvents} teams={ game.boxscore.teams}/>
      }

    </div>
  )
}

export default Commentary