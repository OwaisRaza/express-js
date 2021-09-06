const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

// built in middleware
const staticPath = path.join(__dirname, "../public");
const changePath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname, "./templates/partials");
// app.use(express.static(staticPath));

// to set the view engine
app.set("view engine", "hbs");

// added change views directory name example
app.set("views", changePath);

// register partials path
hbs.registerPartials(partialPath);

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
