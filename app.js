const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));

app.get("/pizza/pepperoni", (req, res) => {
  res.send("Youre pizza is on the way!");
});

app.get("/pizza/pineapple", (req, res) => {
  res.send("Its actually not okay to eat pineapple!");
});

app.get("/echo", (req, res) => {
  const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}`;
  res.send(responseText);
});

app.get("/sum", (req, res) => {
  let c = parseFloat(req.query.a) + parseFloat(req.query.b);
  let responseText = `The sum of ${req.query.a} and ${req.query.b} is ${c}`
  res.send(responseText);
});

app.get("/cipher", (req, res) => {
  // let encryptedMessage = req.query.text req.query.shift
  let { text = '', shift = 13} = req.query;
  shift = parseInt(shift);
  text = text.toLowerCase()
  let offset = 'a'.charCodeAt(0) - 1;
  let responseText = '';
  for (let i = 0; i < text.length; i++) {
    let currentCharNum = text.charCodeAt(i) - offset;
    console.log(currentCharNum);
    currentCharNum = ((currentCharNum + shift) % 26) + offset;
    console.log(currentCharNum);
    responseText += String.fromCharCode(currentCharNum);
  }
  res.send(responseText);
});

app.get("/queryViewer", (req, res) => {
  console.log(req.query);
  res.end();
});

app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});
