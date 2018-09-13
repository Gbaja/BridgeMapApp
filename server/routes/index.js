const express = require("express");

const router = express.Router();

const signup = require("./signup");

router.get("/api/hello", (req, res)=>{
  res.send("Hello");
});

router.post("/api/signup", signup.post);

module.exports = router;