//Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;


//Put in the Mongo Connection String
//Make sure to Whitelist the IP of your Machine on the MongoAtlas Portal
const uri = "mongodb+srv://HarterMongo:BehinderterMongo@cluster0.ojn4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useUnifiedTopology: true }); // useUnifiedTopology removes a warning

async function mainframe(Database, Collection, SearchParameters){
    await client.connect()
    //let obj = await client.db().admin().listDatabases()

    //Read Database in a seperate function to implement the callback
    function read(callback) {
        const result = client.db(Database).collection(Collection).find({SearchParameters}).toArray(function(err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
            client.close();
          }); 
    } 
    //Get Database Object as a Promise out of the Callback scope 
    const entries = await new Promise((resolve, reject) => {
        read( (x) => {return resolve(x)} )
    })
    //console.log(entries);
    return entries
}

//This module can only be executed inside a async function when imported
module.exports = mainframe