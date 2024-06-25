import { MONGO_URI } from '$env/static/private';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = MONGO_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error: any) {
    console.log("HAY UN ERROR: " + error);
  }
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); // THIS time we don't close the client  
  console.log("CLOSED connection");
  }
  const dbName = "bolsa_trabajo";
  const db = client.db(dbName);
  console.log("Your MongoDB is: " + db.databaseName.toLowerCase());
  const collUsers = 'users';
  const collComments = 'comments';
  export const usersCollection = db.collection(collUsers);
  export const commentsCollection = db.collection(collComments);



