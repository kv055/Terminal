const express = require("express");
const cors = require('cors');
const fetch = require('node-fetch')

const app = express();

let port = 5003
app.listen(port, ()=>{
    console.log("Alles Roger auf Port ",port);
});

//Creating Allow Origin Heades
app.use(cors())

const options = {
  method: 'POST',
  body: JSON.stringify(
    //Creating an Request-Body with all the Information
    {
      pair : 'XETHZUSD',
      interval : 1440,
      since : new Date('2021-02-01').getTime()/1000
    }
  ),
  headers: {
    'Content-Type': 'application/json'
  }
};

let APIanswer = async () =>{
  let answer = await fetch('https://api.kraken.com/0/public/OHLC', options)
  .then(res => res.json())
  .catch (error => console.log('Error Report: ',error))       
  
  app.get('/position2',(request, response) => {
    response.json({
      answer
    });
  });
}
APIanswer()
