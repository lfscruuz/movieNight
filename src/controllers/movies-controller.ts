import { Request, Response } from "express";
import { findMany } from "../repositories/movies-repostory.js";

async function listAll(req: Request, res: Response) {
    const resultado = await findMany();
    res.send(resultado)
}

export{
    listAll
}