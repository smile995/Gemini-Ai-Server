const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.Gemini_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get("/gemini-prompt", async (req, res) => {
  const { prompt } = req.body;
  const result = await model.generateContent(prompt);
  res.send(result.response.text());

});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
