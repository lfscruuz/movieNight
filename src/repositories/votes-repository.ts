import { connectionDB } from "../database/db.js";

async function findMany(){
    return connectionDB.vote.findMany()
}

async function createOne(userId: number, movieId: number){
    return connectionDB.vote.create({
        data: {
            userId,
            movieId
        }
    })
}

export {
    findMany,
    createOne
}