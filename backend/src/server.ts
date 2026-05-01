import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { connectDB } from "./config/db";
import linkRoutes from "./routes/linkRoutes";
import redirectLink from "./routes/redirectLink";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GoLink backend server is running",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GoLink backend is healthy",
  });
});

// API routes first
app.use("/api/links", linkRoutes);

// Redirect routes after API routes
app.use("/go", redirectLink);

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(Number(env.PORT), () => {
    console.log(`Server is listening at http://localhost:${env.PORT}`);
  });
};

startServer();