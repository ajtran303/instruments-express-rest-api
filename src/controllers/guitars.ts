import { Request, Response } from "express"

interface ReqRes {
  (req: Request, res: Response): void
}

// CREATE

export const postGuitar: ReqRes = (req, res) => {
  res.status(201).send("Made a new guitar!")
}

// READ

// UPDATE

// DESTROY