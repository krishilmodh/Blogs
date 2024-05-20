
import { Router } from "express"
import authRouter from "./auth.js"
import blogRouter from "./blog.js"

const router = Router();

// auth related routes goes here
router.use("/auth", authRouter);

// blog related routes goes here
router.use("/blog", blogRouter)

export default router