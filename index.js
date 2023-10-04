const express=require('express');
const path=require('path')
const port=8000;
const db=require('./config/mongoose')
const expressEJSLayouts=require('express-ejs-layouts');
const bodyParser=require('body-parser')

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressEJSLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(err){
        console.log("Error in listening to server:",err);
    }
    console.log("Server up and running");
})
