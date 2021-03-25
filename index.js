const express = require("express");
const cors = require("cors");
const routes = require("./server/routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })