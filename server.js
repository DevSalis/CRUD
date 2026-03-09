import express from "express";
const app = express();
app.use(express.json());
app.listen(3000);

app.get("/usuarios/:acerola", (req, res) => {
  console.log(req);
  res.send("rota get criada com sucesso");
});

app.post("/usuarios", (req, res) => {
  console.log(req);
  res.send("rota POST");
});
