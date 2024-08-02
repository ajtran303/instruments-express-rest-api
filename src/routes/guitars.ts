import { Router } from "express"
import {
  getGuitar,
  getGuitars,
  postGuitar
} from "../controllers/guitars"

const router = Router()

router.get("/", getGuitars)
router.get("/:id", getGuitar)

router.post("/", postGuitar)

export default router
