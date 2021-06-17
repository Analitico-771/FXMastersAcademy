

const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');
router.get("/registration", (req, res) => {
  res.render('registration')
});
//form submitted
router.post('/registration', async (req, res)=>{
  try{
    console.log("made it");
    //get information from header 
    let {fName, lName, username, password, email} = req.body;
    //hash our password 
    let passwordEncrypted = bcrypt.hashSync(password, 8);
    //store username, password, email inside database
    let result = await db.users.create({
      fName: fName,
      lName: lName,
      username: username, 
      password: passwordEncrypted, 
      email: email 
    })
    res.redirect('/login')
  }
  catch(error){
    res.send(error)
  }
})
module.exports = router;