import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let { teamId, season } = req.body

  try {

    const resp = { id: teamId, season }
    res.json(resp)

  } catch (err) {
    res.status(500).send({ error: err })
  }
}