import express from "express";
const app = express();
app.use(express.json());
app.listen(3000);
const user = [];

app.get("/usuarios", (req, res) => {
  res.status(200).json(user);
});

app.post("/usuarios", (req, res) => {
  user.push(req.body);
  res.status(201).json({ message: "Usuario cadastrado com sucesso" });
});
