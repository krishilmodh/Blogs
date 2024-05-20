
import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import router from "./routes/index.js"
import "./db/config.js"

const app = express();
dotenv.config();

// App middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

// App routes
app.use("/api/v1", router)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Node.js server setup successfully");
})