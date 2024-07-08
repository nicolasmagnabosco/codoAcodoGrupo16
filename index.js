import express from "express";
import dotenv from "dotenv";
import cursosRouter from "./routes/cursos.router.js";
import reseñasRouter from "./routes/reseñas.router.js";
import authRouter from "./routes/auth.router.js";
dotenv.config();
export const app = express();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use(express.json());
app.use("/cursos", cursosRouter);
app.use("/resenas", reseñasRouter);
app.use("/auth", authRouter);
