

const express = require("express");
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models');

router.get("/login", (req, res) => {
  res.render('login')
});

router.get('/logout', (req, res) => {
  req.logout();  //clears the session.  
  res.redirect('/');
})

passport.use(new LocalStrategy( async (username, password, done)=>{
  try{
    // make db call to check if username is in our db
    let records = await db.users.findAll({where: {username: username}});
    //[{}]
    // console.log('break1');
    if(records != null){
      // check passwords
      let record = records[0];
      // console.log('break2', record);
      bcrypt.compare(password, record.password, (err, response)=>{
          if(response){
            //this means a match, user has correct password
            // console.log('break3');
            done(null, {id: record.id, fName: record.fName, username: record.username, roleID:record.roleID})
          }
          else{
            //passwords didn't match
            // console.log('break4', err);
            done(null, false)
          }
      })
    }
    else{
      //user wasn't found in our db
      done(null, false)
    }
    //if user is in db, then check if password is valid
    // done(null, {})
    // done(null, false)
  }
  catch(error){
  }
}))

router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), 
async (req, res) => {
  // console.log(`inside of login ${req.isAuthenticated()}`);
  // console.log(req.user.roleID);
  // console.log(req.user.id);
  // console.log(req.user.fName);
  
  // res.send('you made it through')
  res.redirect('/fxacademy')
  // res.render('fxacademy', {
  //   id: req.user.id,
  //   roleID: req.user.roleID,
  //   fName: req.user.fName
  // })
  

  //grab userLevel and res.render intermediate or basic page according to user Level
  // useLevel pages are in the Views folder
  // res.render('/basic')
  
})

passport.serializeUser((user, done)=>{
  //passport is adding information to the sessions {id:"", username:""}
  done(null, user)
})

// router.get('/test', (req, res) => {
  
//   res.send('test')
// })

router.get('/fxacademy', (req, res) => {
  res.render('fxacademy', {
    id: req.user.id,
    roleID: req.user.roleID,
    fName: req.user.fName
  })
})


passport.deserializeUser(async (user, done)=>{
  // console.log('deserializing user');
  done(null, user)
  // try{
  //   //additional security 
  //   //checking to see if user is valid with the cookie that was passed 
  //   // form the request
  //   // id is coming from the session
  //     let user = await db.users.findByPk(id);
  //     done(null, user)
  // }
  // catch(error){
  //   done(null, false)
  // }
})
module.exports = router;