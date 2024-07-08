import express from "express";
import cursosController from "../controllers/cursos.controller.js";

const router = express.Router();

router.get("/", cursosController.getAll);
router.get("/:id", cursosController.getByID);

export default router;
