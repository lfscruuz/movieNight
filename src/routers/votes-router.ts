import { Router } from "express";
import { listAll, voteForMovie } from "../controllers/votes-controller.js";
const router = Router();

router.get("/", listAll);
router.post("/", voteForMovie)
export default router;
