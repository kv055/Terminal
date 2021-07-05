let windowsPath = '/mnt/c/Users/Jürgen/Documents/Code/Terminal'
let ubuntuPath = '/home/hackerboi/Dokumente/Terminal/'

const OHLCPlot = require(windowsPath+'/Server/OHLCChartPlot')
const LinePlot = require(windowsPath+'/Server/LineChartPlot')
const MarkerPlot = require(windowsPath+'/Server/MarkerChartPlot')

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
        Line
        ,Marker  
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


