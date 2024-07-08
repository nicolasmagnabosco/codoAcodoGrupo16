import db from "../db/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const register = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    res
      .status(500)
      .json({ auth: false, error: "Error en el envio de credenciales" });
  const hash = bcrypt.hashSync(password, 8);
  const user = { id: crypto.randomUUID(), email: email, contraseña: hash };
  const sql = "INSERT INTO usuarios (id, email, contraseña) VALUES (?, ?, ?)";
  db.query(sql, [user.id, user.email, user.contraseña], (error, rows) => {
    if (error)
      return res
        .status(500)
        .json({ auth: false, error: "Error al crear el usuario" });
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(201).json({ auth: true, token: token });
  });
};

const restricted = (req, res) => {
  const userID = req.userID;
  res.json({ auth: "hey", id: userID });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM usuarios WHERE usuarios.email = ?";
  db.query(sql, [email], (error, rows) => {
    if (error)
      res
        .status(500)
        .json({ auth: false, error: "error al conectarse con el servidor" });
    else {
      if (!rows[0])
        res
          .status(404)
          .json({ auth: false, error: "email o contraseña incorrecto" });
      else {
        const isPasswordValid = bcrypt.compareSync(
          password,
          rows[0].contraseña
        );
        if (!isPasswordValid)
          res
            .status(404)
            .json({ auth: false, error: "email or passowrd is incorrect" });
        else {
          const token = jwt.sign({ id: rows[0].id }, process.env.SECRET_KEY, {
            expiresIn: "1h",
          });
          res.json({ auth: true, token: token });
        }
      }
    }
  });
};
export default { register, restricted, login };
