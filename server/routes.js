const express = require("express");
const router = express.Router();

const Users = require("./controller/Users");

router.get("/users", Users.all);

module.exports = router;