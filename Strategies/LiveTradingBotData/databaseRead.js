const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://HarterMongo:BehinderterMongo@cluster0.ojn4q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useUnifiedTopology: true }); // useUnifiedTopology removes a warning

async function mainframe(Database, Collection, SearchParameters){
    await client.connect()
    //let obj = await client.db().admin().listDatabases()
    function query(callback) {
        const result = client.db(Database).collection(Collection).find({SearchParameters}).toArray(function(err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
            client.close();
          }); 
    } 
    //Database Object
    const entries = await new Promise((resolve, reject) => {
        query( (x) => {return resolve(x)} )
    })
    //console.log('EEEEEEEEEEEEEEEee',entries);
    return entries
}

module.exports = mainframe