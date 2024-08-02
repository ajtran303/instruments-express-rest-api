import { Router } from "express"
import { postGuitar } from "../controllers/guitars"

const router = Router()
router.post("/", postGuitar)

export default router
