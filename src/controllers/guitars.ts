import { Request, Response } from "express"

interface ReqRes {
  (req: Request, res: Response): void
}

interface Guitar {
  type: string,
  maker: string,
  color: string,
  id: number
}

const guitars: Guitar[] = []

// CREATE

export const postGuitar: ReqRes = (req, res) => {
  guitars.push({
    type: req.body.type,
    maker: req.body.maker,
    color: req.body.color,
    id: req.body.id,
  })
  res.status(201).send("Made a new guitar!")
}

// READ
export const getGuitars: ReqRes = (req, res) => {
  res.status(200).send(guitars)
}

export const getGuitar: ReqRes = (req, res) => {
  const guitar = guitars.find(
    g => "" + g.id === req.params.id
  )
  res.status(200).send(guitar)
}

// UPDATE

// DESTROY