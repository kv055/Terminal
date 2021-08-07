//Formating Data to be displayed as line chart in a plot
//Needs an object with the following key/value pairs as input {time: [],value: []}
class PlotLineObject {
    constructor(xAxis, yAxis){
      this.x = xAxis, 
      this.y = yAxis,
      this.mode = 'lines',
      this.type = 'scatter' 
    }

}

let creator = (array)=>{
    let giveback = []
    array.forEach(element => {
        giveback.push(new PlotLineObject(element.time, element.value))
    });
    return giveback
}

module.exports = creator

