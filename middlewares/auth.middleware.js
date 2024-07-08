import jwt from "jsonwebtoken";

const validateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer "))
    res.status(401).json({ error: "El token no se envió correctamente" });
  else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
      if (error) res.status(401).json({ error: "Token invalido" });
      else req.userID = decode.id;
      next();
    });
  }
};

export default validateToken;
