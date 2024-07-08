import express from "express";
import dotenv from "dotenv";
import cursosRouter from "./api/routes/cursos.router.js";
import reseñasRouter from "./api/routes/reseñas.router.js";
import authRouter from "./api/routes/auth.router.js";
dotenv.config();
export const app = express();

app.use(express.json());
app.use("/cursos", cursosRouter);
app.use("/resenas", reseñasRouter);
app.use("/auth", authRouter);
