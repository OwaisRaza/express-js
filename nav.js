const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("This is a home page.");
});

app.get("/about", (req, res) => {
  res.status(200).send("This is a about page.");
});

app.get("/contact", (req, res) => {
  res.status(200).send("This is a contact page.");
});

app.listen(port, () => {
  console.log("listen....");
});
