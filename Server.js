// 🌸 Ashu AI Backend 🌸
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// default route for testing
app.get("/", (req, res) => {
  res.send("Ashu AI Backend is live 💖✨");
});

// example POST route (AI message)
app.post("/message", (req, res) => {
  const { text } = req.body;
  const reply = `You said: ${text} 💬`;
  res.json({ reply });
});

// start server
app.listen(port, () => {
  console.log(`💖 Server running on port ${port}`);
});
