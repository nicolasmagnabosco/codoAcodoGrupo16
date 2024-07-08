import db from "../db/db.js";

const getAll = (req, res) => {
  const sql = "SELECT * FROM cursos";
  db.query(sql, (err, rows) => {
    if (err)
      res.status(500).json({ error: "Failed to connect to the database" });
    else if (rows.length === 1) return res.status(200).json(rows[0]);
    else res.status(200).json(rows);
  });
};

const getByID = (req, res) => {
  const sql = "SELECT * FROM cursos WHERE cursos.id = ?";
  db.query(sql, [req.params.id], (err, rows) => {
    if (err)
      res.status(500).json({ error: "Failed to connect to the database" });
    else res.status(200).json(rows[0]);
  });
};

export default { getAll, getByID };
