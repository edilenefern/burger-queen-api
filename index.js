const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
 res.send({ app: "Hello World" });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })