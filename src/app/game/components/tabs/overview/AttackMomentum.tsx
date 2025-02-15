
import React, { useEffect } from 'react'
import Iframe from 'react-iframe'

type Props = {
  sofaId: any
}

const AttackMomentum = ({ sofaId }: Props) => {

  let src = `https://widgets.sofascore.com/es-ES/embed/attackMomentum?id=${sofaId}&widgetTheme=dark&v=2`

  /**<iframe id="sofa-standings-embed-143625-70268" src="https://widgets.sofascore.com/es-ES/embed/tournament/143625/season/70268/standings/Primera%20LFP%202025%2C%20Apertura%2C%20Group%20A?widgetTitle=Primera%20LFP%202025%2C%20Apertura%2C%20Group%20A&showCompetitionLogo=true" style=height:923px!important;max-width:768px!important;width:100%!important; frameborder="0" scrolling="no"></iframe>
      <div style="font-size:12px;font-family:Arial,sans-serif;text-align:left">
        Clasificación ofrecida por <a target="_blank" href="https://www.sofascore.com/">Sofascore</a>
      </div> */

//      <iframe width="100%" height="286" src={src}></iframe>

  return (
    <div className="bg-[--tw-color-800] rounded-lg p-2">
      <h2 className='text-center font-bold mx-auto pt-1 pb-2'>ATTACK MOMENTUM</h2>
			
			<Iframe url={src}

						      width="100%"
						      height="100%"
						      styles={{height: "286px"}}
			/>
    </div>
  )
}

export default AttackMomentum