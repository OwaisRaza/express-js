const path = require("path");
const express = require("express");
const app = express();

// built in middleware
const staticPath = path.join(__dirname, "../public");
const changePath = path.join(__dirname, "./templates");
// app.use(express.static(staticPath));

// to set the view engine
app.set("view engine", "hbs");

// added change views directory name example
app.set("views", changePath);

// added dynamic data example
app.get("/", (req, res) => {
  res.render("index", {
    name: "Express",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8000, () => {
  console.log("listing.....");
});
