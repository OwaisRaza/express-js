const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8000, () => {
  console.log("listing.....");
});
