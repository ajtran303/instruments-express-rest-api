import { Router } from "express"

const router = Router()
router.post("/", (req, res) => {
  res.status(201).send("Made new guitar!")
})

export default router
