const express = require("express");

const router = express.Router();

const signup = require("./signup");
const login = require("./login");
const allWorkshops = require("./all_workshops");

router.get("/api/hello", (req, res)=>{
  res.send("Hello");
});

router.post("/api/signup",  signup.post);
router.post("/api/login",login.post);

router.get("/api/all_workshops", allWorkshops.get);

module.exports = router;