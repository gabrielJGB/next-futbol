import { fetchRoster, fetchTeam, fetchTeamArticles } from '@/utils/fetch'
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let { teamId, season } = req.body
 
  try {
    if(season === undefined)
        season = false

    const team = await fetchTeam(teamId, false)
    
    res.json(team)


  } catch (err) {
    res.status(500).send({ error: err })
  }
}