const express=require('express');
const path=require('path')
const port=8000;
const db=require('./config/mongoose')
const expressEJSLayouts=require('express-ejs-layouts');
const bodyParser=require('body-parser')

const app=express();

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
const dbUrl = 'mongodb://0.0.0.0/Code4Cause_DB';

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressEJSLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name: 'code4cause',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
        mongoUrl: dbUrl,
        autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongo db setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(err){
        console.log("Error in listening to server:",err);
    }
    console.log("Server up and running");
})
