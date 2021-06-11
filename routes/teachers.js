

const express = require("express");
const router = express.Router();

router.get("/teachers", (req, res) => {
  res.render("teachers");
});

module.exports = router;