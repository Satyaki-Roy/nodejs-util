const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  try {
    throw new Error("error");
    res.send("hello");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  res.send("error occurred");
});

app.listen(3000, () => console.log("server started"));
