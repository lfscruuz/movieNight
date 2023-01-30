import { Router } from "express";
import { listAll } from "../controllers/users-controllers.js";

const router = Router();

router.get("/", listAll)

export default router
