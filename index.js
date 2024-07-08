import express from "express";
import dotenv from "dotenv";
import cursosRouter from "./routes/cursos.router.js";
import reseñasRouter from "./routes/reseñas.router.js";
import authRouter from "./routes/auth.router.js";
dotenv.config();
export const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hey!");
});

app.use(express.json());
app.use("/cursos", cursosRouter);
app.use("/resenas", reseñasRouter);
app.use("/auth", authRouter);
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
