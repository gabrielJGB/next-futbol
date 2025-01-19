import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

//   const { name, message } = req.body
 
  try {
    
    res.json({message:"epa"})
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}