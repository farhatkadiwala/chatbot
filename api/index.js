import express from "express";
import { connectToDatabase, client } from "../db.js"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/checkName", async (req, res) => {
  const nameToCheck = req.body.name;

  try {
    const database = client.db("chatbot");
    const collection = database.collection("_chat");

    // Check if the name exists in the database
    const existingName = await collection.findOne({ name: nameToCheck });

    if (existingName) {
      res.status(200).json({ meaning: existingName.meaning });
    } else {
      res.status(200).json({ meaning: null });
    }
  } catch (error) {
    console.error("Error checking name:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Server failed to start:", error);
  });
