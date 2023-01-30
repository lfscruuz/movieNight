import { Request, Response } from "express";
import { createOne, findMany } from "../repositories/votes-repository.js";

async function listAll(req: Request, res: Response){
    const resultado = await findMany();
    res.send(resultado)
}

async function voteForMovie(req: Request, res: Response){
    const {userId, movieId} = req.body
    const resultado = await createOne(userId, movieId)

    res.send(resultado)
}

export {
    listAll,
    voteForMovie
}