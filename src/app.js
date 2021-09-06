const path = require("path");
const express = require("express");
const app = express();

// built in middleware
const staticPath = path.join(__dirname, "../public");
// app.use(express.static(staticPath));

// to set the view engine
app.set("view engine", "hbs");

// added dynamic data example
app.get("/", (req, res) => {
  res.render("index", {
    name: "Express",
  });
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8000, () => {
  console.log("listing.....");
});
