import db from "../db/db.js";

const getAll = (req, res) => {
  const sql = "SELECT * FROM resenas";
  db.query(sql, (err, rows) => {
    if (err)
      res.status(404).json({ error: "Failed to connect to the database" });
    else if (!rows) res.status(404).json({ error: "Element not found" });
    else if (rows.length === 1) res.json(rows[0]);
    else res.json(rows);
  });
};

const getByID = (req, res) => {
  const sql = "SELECT * FROM resenas WHERE id = ?";
  db.query(sql, [req.params.id], (err, rows) => {
    if (err)
      res.status(500).json({ error: "Failed to connect to the database" });
    else if (!rows || !rows[0])
      res.status(404).json({ error: "Element not found" });
    else res.status(200).json(rows[0]);
  });
};

const getByUser = (req, res) => {
  const sql = "SELECT * FROM resenas WHERE usuario_id = ?";
  db.query(sql, [req.userID], (err, rows) => {
    if (err)
      res.status(500).json({ error: "Failed to connect to the database" });
    // else if (!rows || !rows[0])
    //   res.status(404).json({ error: "Element not found" });
    else res.status(200).json(rows);
  });
};

const add = (req, res) => {
  const usuarioID = req.userID;
  const { cursoID, calificacion, descripcion } = req.body;
  const sql =
    "INSERT INTO resenas (usuario_id, curso_id, calificacion,descripcion) VALUES (?,?,?,?)";
  db.query(
    sql,
    [usuarioID, cursoID, calificacion, descripcion],
    (err, rows) => {
      if (err)
        res.status(500).json({ error: "Failed to connect to the database" });
      else if (rows) res.status(402).json({ id: rows.insertId });
    }
  );
};

const edit = (req, res) => {
  const usuarioID = req.userID;
  const { calificacion, descripcion } = req.body;
  const reseñaID = req.params.id;
  const sql =
    "UPDATE resenas SET calificacion = ?, descripcion = ? WHERE id = ? AND usuario_id = ?";
  db.query(
    sql,
    [calificacion, descripcion, reseñaID, usuarioID],
    (err, rows) => {
      if (err)
        res.status(500).json({ error: "Failed to connect to the database" });
      else if (!rows || rows.affectedRows === 0)
        res.status(401).json({ error: "Esta reseña está restringida" });
      else res.status(202).json({ result: true });
    }
  );
};

const destroy = (req, res) => {
  const usuarioID = req.userID;
  const reseñaID = req.params.id;
  const sql = "DELETE FROM resenas WHERE id = ? AND usuario_id = ?";
  db.query(sql, [reseñaID, usuarioID], (err, rows) => {
    if (err)
      res.status(500).json({ error: "Failed to connect to the database" });
    else if (!rows || rows.affectedRows === 0)
      res.status(401).json({ error: "Esta reseña está restringida" });
    else res.status(202).json({ result: true });
  });
};

export default { getAll, getByID, getByUser, add, edit, destroy };
