import { Router } from "express";
import { SignIn, SignUp } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/signin", SignIn);
authRouter.post("/signup", SignUp);
export default authRouter;
