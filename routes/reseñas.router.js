import express from "express";
import reseñasController from "../controllers/reseñas.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", reseñasController.getAll);
router.get("/:id", reseñasController.getByID);
router.post("/", authMiddleware, reseñasController.add);
router.get("/usuario/all", authMiddleware, reseñasController.getByUser);
router.put("/:id", authMiddleware, reseñasController.edit);
router.delete("/:id", authMiddleware, reseñasController.destroy);

export default router;
