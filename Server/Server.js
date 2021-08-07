const path = require('path')

const OHLCPlotPath = path.join(__dirname,'../','/Server/OHLCChartPlot')
const LinePlotPath = path.join(__dirname,'../','/Server/LineChartPlot')
const MarkerPlotPath = path.join(__dirname,'../','/Server/MarkerChartPlot')

const OHLCPlot = require(OHLCPlotPath)
const LinePlot = require(LinePlotPath)
const MarkerPlot = require(MarkerPlotPath)

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


