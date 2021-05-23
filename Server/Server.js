const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors())

let port = 5500
app.listen(port, ()=>{
    console.log("Alles Roger auf Port ",port);
});

const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')
const MAPastData = require('/home/hackerboi/Dokumente/Terminal/MovingAverage/MAPastData')


let tesr = async ()=>{
    let MovingAverage = await MAPastData(AveragePrice,APIanswer,20);
    app.get('/MAPastData',(request, response) => {
        response.json({
        MovingAverage
        });
      });

    
}
tesr()


