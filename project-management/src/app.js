import express from "express";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); //server static resourses like images

// cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], //array
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//  import the routes

import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";
import projectRouter from "./routes/project.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/america", (req, res) => {
  res.send("Hello America");
});

app.get("/japan", (req, res) => {
  res.send("Hello Japan");
});

export default app;
