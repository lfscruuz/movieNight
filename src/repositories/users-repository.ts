import { connectionDB } from "../database/db.js";

async function findMany() {
    return connectionDB.user.findMany()
}

export {
    findMany
}