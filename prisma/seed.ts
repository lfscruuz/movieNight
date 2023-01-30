import { connectionDB } from "../src/database/db.js";

async function main(){
    await connectionDB.user.createMany({
        data:[
            {
                "name": "user1"
            },
            {
                "name": "user3"
            },
            {
                "name": "user4"
            }
        ]
    })

    await connectionDB.movie.createMany({
        data: [
            {
                "name": "movie1"
            },
            {
                "name": "movie2"
            },
            {
                "name": "movie3"
            },
        ]
    })

}

main()
.then(() =>{
    console.log("Registro feito com sucesso")
})
.catch((erro) =>{
    console.log(erro);
    process.exit(1);
})
.finally( async () =>{
    connectionDB.$disconnect()
})