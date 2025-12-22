// app.js
import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/errorHandler.js";
import authRouter from "./routes/authRoutes.js";
import { v4 as uuidv4 } from 'uuid';
import connectDB from "./config/mongodb.js";
import { NotFoundError } from "./errors/AppError.js";

const app = express();
connectDB();
const allowedOrigins = [
    "http://localhost:8080",
    "http://localhost:5173", // <-- add https://
];
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins,credentials:true}));


// request id middleware
app.use((req, res, next) => {
  req.traceId = uuidv4();
  res.setHeader('X-Trace-Id', req.traceId);
  next();
});

app.use('/api/auth', authRouter);

app.get("/",(req,res)=>{
    res.send("I'm Here");
})
// 404 handler
app.use((req, res, next) => {
  next(new NotFoundError('Route not found'));
});

// centralized error handler
app.use(errorHandler);

export default app;