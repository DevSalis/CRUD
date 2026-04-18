import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.listen(3000);

app.get("/usuarios", async (req, res) => {
  const user = await prisma.user.findMany();
  res.status(200).json(user);
});

app.post("/usuarios", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  });
  res.status(201).json(user);
});
