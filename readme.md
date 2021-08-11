Preamble:
Terminal is a nodeJS based Program that serves as a simulation Framework to test different trading strategies based on historical data.
As an example Strategy we can choose the Crossing of the 5 and 10 day Moving Average Indicators.
Whenever the 5day Moving Average Crosses the 10day moving Average to the upside we buy, and whenever he does to the downside we sell.
This is a fairly  easy strategy for the sake of dokumenting it, and in the following we will explain in detail how this software is achieving that.
It takes OHLC price data and a trading strategy as Input to perform the callculations.
The Package Contains a Backend(nodeJS) and a FrontEnd(currently just a simple HTML with VanillaJS, but planning to expand it to reactJS as a separate Repo)

Abstract:
In the first Step we are using the node-fetch module to fetch the price data from the API.
In this Example we can use both the Binance and the Kraken API to fetch historical price data [OHLC] from any trading pair thats listed.

To easily use Price data for calculating Indicators we need one value for each point in time, thats why we are Converting the data from the OHLC format to simple average Values, because we need mostly average values to calculate technical indicators.

In this step we can either take the OHLC data from Module 1 or the Average Values Data from Module 2 to Calculate our indicators then create our trading strategies based on them.
At this point we can and perhaps should use as many 3rd party Libraries as possible to save time, and since there is a lot of great code out there we dont have to reinvent the Wheel at this Point.

In the fourth Step we put our Strategy we created in Step 3 to test and see how it would have performed in the past.
We have to choose our start Capital and Position sizing, and after that the Module will give us a list of Trades in the Past and at the end we can clearly see if we would have won or lost some money.

In the 5th step we are using an API built in the the Express.js framework to make the data accesible for the Frontend.
We are feeding this module all data to be rendered, and sub-modules will be responsible for formating the Data so that the Chart can Visualize them.

In step #6 we load the frontend Charts from Plottly.js 
-planning to build this frontend in react.js, to dynamically render elements

This whole workflow will all be controlled from the App.js module, its the entry point of the Package.
All main modules are getting imported into here.


In Practice:
The App.js module.
This is the entry point and the controll panel of the whole package.
The desired modules get imported in here and then executed inside the async runtime function.
The import variable must be assigned to a new variable inside the runtime function with the await Keyword in between.

Step #1: Getting OHLC Data.
For that we use the ApiAnswer.js module wich is located in the Fetch Folder.
This module contains an Object wich has for a different method for each Datasource.
The methods need the Config file for each datasource as input.
For example if you want to get OHLC data from the Kraken exchange, the Kraken method takes the KrakenOHLCReques module as import.
In there all necessary parameters like Candle Size, Trading Pair and Start/End Date must be specified.
This Module can only be executed in async functions, no arguments needed.

Step #2: Converting OHLC to Average Values.
For this task we use the OHLCtoAverage module in the OHLCtoAverageFormater folder. 
The module is strucktured the same way as ApiAnswer.js, which is its only input.
This Module can only be executed in async functions, no arguments needed.

Step #3: Calculating Indicators.
In this step we can get creative and make the use of one or more technical indicators and build our strategy.
To Calculate all kinds of technical indicators the tulind library can be used.
//https://github.com/TulipCharts/tulipnode

Further testing with this library is still needed.
Modules using this (or any other similar) Library need to be executed inside a async function.

Step#4: Putting the Strategy to test.
This part of the code is still in an experimental state.

Step#5: Server for frontend visualisation.
The Module is based on the Express.js library, it uses two different endpoints (routes) for the OHLC and for the Indicators data.
The imports are 
	-the different chartPlot.js modules wich format the incoming data so that 	
	it can directly be rendered into a PlotlyChart on the frontend.
	
The arguments are all the raw data modules that are a object with at least the two key/value pairs: 
-time
-value
,where the values have to be inside an array.

Step #6: The Frontend.
Not much logic is implemented here, just the fetch functions for each route the server has.
