import { MongoClient } from "mongodb";

const password = encodeURIComponent("Hello#1035");

const uri =
  `mongodb+srv://farhatkadiwala:${password}@cluster0.gqwipgt.mongodb.net/chatbot?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export { connectToDatabase, client };
