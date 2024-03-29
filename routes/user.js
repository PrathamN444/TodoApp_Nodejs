import express from "express";
import {getMyDetails, login, register, logout} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login); 

router.get("/logout", logout); 

router.get("/me", isAuthenticated, getMyDetails);

export default router;