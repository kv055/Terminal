let APIanswer = require("./ApiAnswer")


async function logAPIanswer(data){
    console.log(await data());
}
logAPIanswer(APIanswer)

