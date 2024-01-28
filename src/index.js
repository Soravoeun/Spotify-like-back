import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT 
import mongoose from "mongoose";
import cors from "cors";
import { authRouter } from "./routes/userRoute";
import { playlistRouter } from "./routes/playlistRoute";

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`[📚 DATABASE ] MongoDB final est connecté ici!!`);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send("Welcome to API Spotify back Final"));
app.use('/playlist', playlistRouter);
app.use('/auth', authRouter);

app.listen(port, () =>
console.log(`[SERVER] is running on http://localhost:${port}`)
);