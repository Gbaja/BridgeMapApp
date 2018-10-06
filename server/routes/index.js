const express = require("express");

const router = express.Router();

const signup = require("./signup");
const login = require("./login");

router.get("/api/hello", (req, res)=>{
  res.send("Hello");
});

router.post("/api/signup", signup.post);
router.post("/api/login", login.post);

module.exports = router;