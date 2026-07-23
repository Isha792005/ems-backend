

import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import express from "express";
import "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import cors from "cors";
import depRouter from "./src/routes/department.routes.js";
import stateRouter from "./src/routes/state.routes.js";
import cityRouter from "./src/routes/city.routes.js";
import empRouter from "./src/routes/employee.routes.js";
import errorHandler from "./src/middleware/errorHandler.js";
import { rateLimit } from "express-rate-limit";
const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://employeemanagementsystem-sooty.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  limit: 100, // Limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: "draft-7", // Return standard rate limit info headers
  legacyHeaders: false, // Disable the X-Rate-Limit headers
});

const PORT = process.env.PORT || 5000;

app.use(express.json());


app.get("/", (req, res) => {
  res.json("msg:Ritika");
});
app.use("/api/auth", authRoutes);
app.use("/api/department", depRouter);
app.use("/api/state", stateRouter);
app.use("/api/city", cityRouter);
app.use("/uploads", express.static("/src/uploads"));
app.use("/api/employee", empRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is successfully running on http://localhost:${PORT}`);
});
