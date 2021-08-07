Terminal is a nodeJS based Program that serves as a simulation Framework to test different trading strategies based on historical data.
It takes OHLC price data and a trading strategy as Input to perform the callculations.
The Package Contains a Backend(nodeJS) and a FrontEnd(currently just a simple HTML with VanillaJS, but planning to expand it to reactJS as a separate Repo)

using the node-fetch module to fetch public data from the API. 
-in my case, i can use both the Binance and the Kraken API to fetch historical price data [OHLC] from the trading pair.
-OHLC data goes after that either directly to the Server and then to the frontend, or gets processed further.

To easily use Price data for calculating Indicators we need one value for each point in time. 
-Converting OHLC format to simple average Values 
-to calculate technical indicators we need mostly average values, but some indicators need Candlestick data (rsi)

-Moving Average 
-Moving Average Crossings
-taking the datapoints of the last 'n' time-intervals of a trading Pair and calculating an average value. 
-then doing that in a for loop for all the historical data. 
-then comparing for every datapoint to see which value is bigger 
-then look out for changes aka the MA crossings. 

Specify a trading Pair
-Choose a Strategy
-See how it would have performed historical data
-get a list of trades which later can be Visualised in the Frontend

using the Express.js framework
-feeding this module all data to be rendered, and sub-modules will be responsible for formating the Data so that the Chart can Visualize them.

Charts used from Plottly.js since they are the best looking and for free 
-biggest Problem with no native Solution is no y-Axis Scaling 
-better alternatives cost money
-planning to build this frontend in react.js, to dynamically render elements

the App.js module is the place where all main modules get loaded into.
-the entire workflow can be controlled from there.
