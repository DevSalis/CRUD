import express from "express";
const app = express();
app.listen(3000);

app.get("/usuarios", (req, res) => {
  res.send("rota get criada com sucesso");
});

app.post("/usuarios", (req, res) => {
  res.send("rota post criada com sucesso");
});
