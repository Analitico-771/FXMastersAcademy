

const express = require("express");
const router = express.Router();
const auth = require('../auth');


router.get("/", (req, res) => {
  res.send("home page");
});

router.get('/admin/dashboard', auth, (req, res) => {


  res.send('you made it to the dashboard')
})

module.exports = router;