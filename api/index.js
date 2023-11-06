import express from "express";
import * as dotenv from "dotenv";
import Configuration from "openai";
import OpenAIApi from "openai";
// import cors from "cors";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());

app.listen(8080, () => console.log("Server started on http://localhost:8080"));

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hola!",
  });
});

app.post("/", (req, res) => {
  try {
    const prompt = req.body.name;

    const response = openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    res.status(200).send({
      dataReceived: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
});

