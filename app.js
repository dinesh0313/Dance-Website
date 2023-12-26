const express = require("express");
const path= require("path");
const fs=require("fs");
const app=express();
const port =8000;

//express specific stuff
app.use('/static',express.static('static'))//for serving static files
app.use(express.urlencoded())
//pug specific stuff 
app.set('view engine', 'pug')//set tha template engine as pug

//endpoints 
app.get('/',(req,res)=>{
    const params ={ }
    res.status(200).render('index.pug',params);
})
app.get('/home',(req,res)=>{
    const params ={ }
    res.status(200).render('home.pug',params);
})


//start the server
app.listen(port,()=>{
    console.timeLog(`the application started successfully on port ${port}`);
});