const express=require('express');
const path=require('path')
const port=8000;
const db=require('./config/mongoose')

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.listen(port,(err)=>{
    if(err){
        console.log("Error in listening to server:",err);
    }
    console.log("Server up and running");
})
