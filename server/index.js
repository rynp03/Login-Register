import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

Connection();
