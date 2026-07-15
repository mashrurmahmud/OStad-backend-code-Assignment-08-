import { Router } from "express";
import authController from "../Controller/AuthController.js"


const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/apiuser", authController.getApiuser);
router.post("/logout", authController.logout);


export default router;