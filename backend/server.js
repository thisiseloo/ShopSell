import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "supersecretkey";

const users = [];

// Signup
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Bütün xanaları doldurun" });
  }

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(409).json({ message: "Bu email ilə artıq qeydiyyat var" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ id: users.length + 1, name, email, password: hashedPassword });

  res.status(201).json({ message: "Qeydiyyat uğurludur" });
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Email və ya şifrə səhvdir" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Email və ya şifrə səhvdir" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email },
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server işləyir: http://localhost:${PORT}`);
});
