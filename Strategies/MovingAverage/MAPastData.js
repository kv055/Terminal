const APIanswer = require("/home/hackerboi/Dokumente/Terminal/Fetch/ApiAnswer")
const AveragePrice = require('/home/hackerboi/Dokumente/Terminal/OHLCtoAverageFormater/OHLCtoAverage')

let MACalculator = async (formater,length) => { //function reference
    
    let globalReturn = {
        time: [],
        value: []
    }
    formater.forEach(item =>{ 
        let index = formater.indexOf(item)
      
        let TagesDaten = []

        //Add the last X(days, weeks, hours, whatever) datapoints together and 
        //push them into the Array
        for(let i=0; i<length; i++) {
            const dayData = formater[index-i]
            if (typeof dayData !== 'undefined' ) {
                TagesDaten.push(Math.trunc(dayData[0]))  
            }
        }
        let sum = null;

        //Take the Array and calculate an average Value from all elements
        if (TagesDaten.length >= length) {
            for (var i = 0; i < length; i++) { 
                    sum += TagesDaten[i] 
                        
            }
            
            globalReturn.time.push(
                formater[index][1]
            )
            globalReturn.value.push(
                Math.trunc(sum/length)
            )
        }   

    })
    return globalReturn
}

module.exports = MACalculator




//Rewrite sketch to a class based component
// class MACalculator {
//     constructor(formater,length){
//         this.time = [];
//         this.value = [];

//         formater.forEach(item =>{ 
//             let index = formater.indexOf(item)
          
//             let TagesDaten = []
    
//             //Add the last X(days, weeks, hours, whatever) datapoints together and 
//             //push them into the Array
//             for(let i=0; i<length; i++) {
//                 const dayData = formater[index-i]
//                 if (typeof dayData !== 'undefined' ) {
//                     TagesDaten.push(Math.trunc(dayData[0]))  
//                 }
//             }
//             let sum = null;
    
//             //Take the Array and calculate an average Value from all elements
//             if (TagesDaten.length >= length) {
//                 for (var i = 0; i < length; i++) { 
//                     sum += TagesDaten[i]            
//                 }
    
//                 this.time.push(formater[index][1])
//                 this.value.push(Math.trunc(sum/length))
//             }   
    
//         }) 
//     }
// }

// let test = async()=>{
//     console.log(new MACalculator(await AveragePrice(await APIanswer()), 20));
// }
// test()