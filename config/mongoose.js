const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0/Code4Cause_DB');

const db=mongoose.connection;

db.on('error',(err)=>{
    console.log("Error in connecting to database",err.message);
})

db.once('open',()=>{
    console.log("Successfully connected to DataBase");
})

module.exports=db;