import { Router } from "express";
import { inscription, login } from "../controllers/usercontroller";

export const authRouter = Router();

authRouter.post("/register", inscription);
authRouter.post("/login", login);
