import express from "express";
import cors from "cors";
import usersRouter from "./routers/users-router.js"
const server = express();

server.use(cors());
server.use(express.json());

server.use(usersRouter)

server.listen(5000, () => {
    console.log("app running......")
})