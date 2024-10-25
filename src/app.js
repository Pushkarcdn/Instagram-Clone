import express from "express";
import config from "./config/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: config.cors.origin,
    Credentials: true,
  })
);

app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));

app.use(express.static("public"));

app.use(cookieParser());

export default app;