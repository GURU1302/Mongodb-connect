const {MongoClient} =require("mongodb");
const uri =require("./atlas_uri");

const client = new MongoClient(uri)
const dbname="bank"

const connectToDatabase = async () => {
    try{
        await client.connect();
        console.log(`connected to the ${dbname} database`);
    } catch (err){
        console.error(`error connecting to the database: ${err}`);
    }
};

const main = async () => {
    try{
        await connectToDatabase();
    } catch (err) {
        console.error(`error connecting to the database: ${err}`);

    } finally{
        await client.close();
    }
};

main();