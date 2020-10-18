const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8000;

app.use(bodyParser.json());

app.get("/hello", (req, res) =>
  res.send({ firstName: "Demetrio", lastName: "Barroso" })
);

app.post("/hello", (req, res) => res.send(`"Hello" ${req.body.name}`));

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
