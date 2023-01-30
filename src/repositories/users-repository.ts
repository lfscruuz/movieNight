import { connectionDB } from "../database/db.js";

async function findMany() {
    return connectionDB.user.findMany()
}

async function findFirst(){
    return connectionDB.user.findFirst({
        where:{
            
        }
    })
}


export {
    findMany
}