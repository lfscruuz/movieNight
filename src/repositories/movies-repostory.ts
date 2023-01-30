import { connectionDB } from "../database/db.js";

async function findMany(){
    return connectionDB.movie.findMany();
}

export{
    findMany
}