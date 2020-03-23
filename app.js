const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));

app.get("/pizza/pepperoni", (req, res) => {
  res.send("Youre pizza is on the way!");
});

app.get("/pizza/pineapple", (req, res) => {
  res.send("Its actually okay!");
});

app.get("/echo", (req, res) => {
  const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}`;
  res.send(responseText);
});

app.get("/queryViewer", (req, res) => {
  console.log(req.query);
  res.end();
});

app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});
