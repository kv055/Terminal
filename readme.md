Preamble:
Terminal is a nodeJS based Program that serves as a simulation Framework to test different trading strategies based on historical data.
As an example Strategy we can choose the Crossing of the 5 and 10 day Moving Average Indicators.
Whenever the 5day Moving Average Crosses the 10day moving Average to the upside we buy, and whenever he does to the downside we sell.
This is a fairly  easy strategy for the sake of dokumenting it, and in the following we will explain in detail how this software is achieving that.
It takes OHLC price data and a trading strategy as Input to perform the callculations.
The Package Contains a Backend(nodeJS) and a FrontEnd(currently just a simple HTML with VanillaJS, but planning to expand it to reactJS as a separate Repo)

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

This whole workflow will all be controlled from the App.js module, it is the place where all main modules get loaded into.

