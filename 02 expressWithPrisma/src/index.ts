import express from "express";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();
app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  if (users.length === 0) {
    const user1 = await prisma.user.create({
      data: {
        name: "Alice",
        type: "dev",
      },
    });
    users.push(user1);
    const user2 = await prisma.user.create({
      data: {
        name: "Bob",
        type: "HR",
      },
    });
    users.push(user2);
  }

  res.json(users);
});
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
