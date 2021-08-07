//Formating Data to be displayed as line chart in a plot
//Needs an object with the following key/value pairs as input {time: [],value: []}
class PlotMarkersObject {
    constructor(xAxis, yAxis){
      this.x = xAxis, 
      this.y = yAxis,
      this.mode = 'markers',
      this.type = 'scatter', 
      this.marker = { size: 18 }
    }

}

let creator = (array)=>{
    let giveback = []
    array.forEach(element => {
        giveback.push(new PlotMarkersObject(element.time, element.value))
    });
    return giveback
}

module.exports = creator