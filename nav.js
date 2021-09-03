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

app.get("/tamp", (req, res) => {
  res.json([
    {
      id: 1,
      name: "ovais",
      company: "abc",
    },
    {
      id: 1,
      name: "raza",
      company: "xyz",
    },
  ]);
});

app.listen(port, () => {
  console.log("listen....");
});
