const express = require("express");
const cors = require("cors");
const { dirname } = require("path");

// const axios = require("axios");
// const { error } = require("console");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.static("./"));

console.log(__dirname);

app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

app.post("/test", (req, res) => {
  url = req.body.data;
  console.log(url);
  res.send({ data: url });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
