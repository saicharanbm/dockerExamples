import prismaClient from "@repo/db/client";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("message", async (message) => {
    const { username, password } = JSON.parse(message.toString());

    if (!username || !password) {
      ws.send(JSON.stringify({ error: "Username and password are required" }));
      return;
    }

    try {
      const user = await prismaClient.user.create({
        data: {
          username,
          password,
        },
      });

      ws.send(JSON.stringify(user));
    } catch (err) {
      ws.send(JSON.stringify({ error: (err as Error).message }));
    }
  });
});
