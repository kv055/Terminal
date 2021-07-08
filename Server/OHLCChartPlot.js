// class PlotOHLCObject {
//     constructor(){
//         this.x = [],
//         //Y-Axis
//         this.close  = [],
//         this.high  = [],
//         this.line = {col:'rgba(31,119,180,1)'}, 
//         this.low = [],
//         this.open = [],
//         //Config
//         this.type = 'candlestick', 
//         this.xaxis = 'x', 
//         this.yaxis ='y'
//     }

// }
 

let creator = (array)=>{
    candleStick = {
        //X-Axis
        x: [],
        //Y-Axis
        close :[], 
        high :[], 
        line: {col :'rgba(31,119,180,1)'}, 
        low: [],
        open: [],
        //Config
        type: 'candlestick', 
        xaxis: 'x', 
        yaxis:'y'
    };

    var layout = {
        dragmode: 'zoom', 
        margin: {
            r: 10, 
            t: 25, 
            b: 40, 
            l: 60
        }, 
        showlegend: false, 
        xaxis: {
            autorange: true, 
            domain: [0, 1], 
            range: [candleStick.x[0],candleStick.x[candleStick.x.length-1]], //Chart Range
            rangeslider: {range: [candleStick.x[0],candleStick.x[candleStick.x.length-1]]}, //RangeSlider Range
            type: 'date'
        }, 
        yaxis: {
            autorange: true, 
            domain: [0, 1], 
            type: 'log',
            fixedrange: false,
            //rangeslider: {range: [candleStick.x[0],candleStick.x[candleStick.x.length-1]]},
        }
    };

    for (element of array){
        candleStick.x.push( new Date(element[0]*1000).toISOString())
        candleStick.high.push(parseFloat(element[2]))
        candleStick.low.push(parseFloat(element[3]))
        candleStick.open.push(parseFloat(element[1]))
        candleStick.close.push(parseFloat(element[4]))
    };
    return {candleStick,layout}
}

module.exports = creator
