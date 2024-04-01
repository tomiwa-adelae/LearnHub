import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allowing cookie to pass from the client/frontend
app.use(cookieParser());

// API routes
app.use("/api/users", userRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}...`));
