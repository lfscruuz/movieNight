import express from "express";
import cors from "cors";
import usersRouter from "./routers/users-router.js"
import moviesRouter from "./routers/movies-router.js"
import votesRouter from "./routers/votes-router.js"

const server = express();

server.use(cors());
server.use(express.json());

server.use("/users", usersRouter);
server.use("/movies", moviesRouter);
server.use("/votes", votesRouter);


server.listen(5000, () => {
    console.log("app running......")
})