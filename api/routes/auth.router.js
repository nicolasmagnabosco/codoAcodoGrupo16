import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", authController.register);
router.get("/restricted", authMiddleware, authController.restricted);
router.post("/login", authController.login);

export default router;
