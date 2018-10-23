const express = require("express");
const { check } = require("express-validator/check");

const router = express.Router();

const signup = require("./signup");
const login = require("./login");

router.get("/api/hello", (req, res)=>{
  res.send("Hello");
});

router.post("/api/signup",  signup.post);
router.post(
  "/api/login",
  [check("email", "Invalid email").isEmail(), check("password","Password must be 8 characters long.").isLength({ min: 8 })],
  login.post
);

module.exports = router;