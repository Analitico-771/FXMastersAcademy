

const express = require('express');
const app = express();
const helmet = require('helmet');
const cookieSession = require('cookie-session');
//! do this
const passport = require('passport');
let PORT = 3000;
//public
app.use(express.static('public'));
app.use(helmet());
//cookie-session 
app.use(cookieSession({
    name: 'session',
    keys: ['lskdfjl;sj;lasjdfl;ajsld;fjasl;djflasjdflsak'], 
    maxAge: 14 * 24  * 60 * 60 * 1000
}))
//views
app.set('view engine', 'ejs')
//! do this also
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended: false}));//Body parser
app.use(express.json());

//routes 
app.use(require('./routes/login')) 
app.use(require('./routes/index'))
app.use(require('./routes/about'))
app.use(require('./routes/teachers'))
app.use(require('./routes/contact'))
app.use(require('./routes/registration'))
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})