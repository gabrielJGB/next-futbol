"use client"
import { sortRoster } from '@/utils/game'
import React, { useEffect, useState } from 'react'

type Props = {
  game:any
}

const Lineups = ({game}: Props) => {

    
    const [lines, setLines] = useState<any>(false)
    
    const formations = [game.rosters[0].formation.split("-"), game.rosters[1].formation.split("-")]
    const rosterHome = game.rosters[0].roster.filter((elem:any) => elem.starter)
    const rosterAway = game.rosters[1].roster.filter((elem:any)=> elem.starter)
    const rosters = [rosterHome, rosterAway]
    const homeColor = game.header.competitions[0].competitors[0].team.color || "white"
    const awayColor = game.header.competitions[0].competitors[1].team.color || "black"
    
    
    
  const switchPositions = (k:number,p1:number,p2:number) =>{
      let aux = rosters[k][p1]
      rosters[k][p1] = rosters[k][p2]
      rosters[k][p2] = aux
  }

  const getLines = (k:number) => {

      rosters[k] = sortRoster(rosters[k])
  
      if (formations[k][1] === "2" && formations[k][2] === "3"&& formations[k][3] === "1") {
          switchPositions(k,6,7)
          switchPositions(k,6,8)
      }
      if(formations[k][1] === "1" && formations[k][2] === "2" && formations[k][3] === "1" && formations[k][4] === "2"){
          switchPositions(k,6,8)
          switchPositions(k,5,7)
          switchPositions(k,6,7)
      }
      if(formations[k][1] === "4" && formations[k][2] === "2" && formations[k][3] === "1"){
          switchPositions(k,9,10)
       
      }
      if(formations[k][1] === "2" && formations[k][2] === "2" && formations[k][3] === "2"){
          switchPositions(k,5,6)
          switchPositions(k,6,7)
      }

      if(formations[k][1] === "1" && formations[k][2] === "4" && formations[k][3] === "1"){
          switchPositions(k,5,6)
          switchPositions(k,5,7)
          switchPositions(k,5,8)
          
      }

      if(formations[k][1] === "3" && formations[k][2] === "1" && formations[k][3] === "2"){
          switchPositions(k,7,8)    
          
      }
   

      let lines:any[] = []
      formations[k].unshift("1")
      formations[k].forEach((playersInLine:any, i:number) => {
          const  x = rosters[k].splice(0, playersInLine)
          lines.push(x)
      })

      return lines
  }


  useEffect(() => {
      setLines([getLines(0), getLines(1)])
      
      
  }, [])




  if (!lines)
      return <div>Cargando</div>

  return (
    <div>Lineups</div>
  )
}

export default Lineups