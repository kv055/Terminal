const OHLCPlot = require('/home/hackerboi/Dokumente/Terminal/Server/OHLCChartPlot')
const LinePlot = require('/home/hackerboi/Dokumente/Terminal/Server/LineChartPlot')
const MarkerPlot = require('/home/hackerboi/Dokumente/Terminal/Server/MarkerChartPlot')

const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors())

let port = 5500
app.listen(port, ()=>{
    console.log("Alles Roger auf Port ",port);
});


let Server = async (OHLC,LineGraph, MarkerGraph)=>{
   
    let Line = LinePlot(await LineGraph)
    let Marker = MarkerPlot(await MarkerGraph)
    
    app.get('/Indicators',(request, response) => {
      response.json({
        Line,Marker
          
       });
    });
    
    let CandleSticks = OHLCPlot(await OHLC)

    app.get('/OHLC',(request, response) => {
      response.json({
        CandleSticks
      });
    });

    
}


module.exports = Server;


