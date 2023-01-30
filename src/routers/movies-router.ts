import { Router } from "express";
import { listAll } from "../controllers/movies-controller.js";
const router = Router();

router.get("/", listAll);

export default router;