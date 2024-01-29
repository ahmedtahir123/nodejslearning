import express from 'express';
import blog from './Services/Blog' 
import categories from './Services/Categories' 

import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://amuhammad:root@cluster0.19tqpfg.mongodb.net/?retryWrites=true&w=majority";


const app = express();

const client = new MongoClient(uri);

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      client.db()
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);


app.use('/api/posts', blog);
app.use('/api/categories', categories);

// Define routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});