const express = require("express");
const path= require("path");
const fs=require("fs");
const app=express();
const mongoose = require('mongoose');
try {
    mongoose.connect('mongodb://localhost/conectDance');
}
catch(err) {
    console.log(err);
}
const port =8000;
app.use(express.json());
//define mongoose schema 
var contactSchema = new mongoose.Schema({
    name:String,
    phone_no :String,
    email_ID:String,
    address:String,
    description:String
});

var Contact =mongoose.model('Contact',contactSchema);

//express specific stuff
app.use('/static',express.static('static'))//for serving static files
// app.use(express.urlencoded())
app.use(express.urlencoded({ extended: true}));
//pug specific stuff 
app.set('view engine', 'pug')//set tha template engine as pug

//endpoints 
app.get('/',(req,res)=>{
    const params ={};
    res.status(200).render('index.pug',params);
})
app.get('/home',(req,res)=>{
    const params ={ }
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params ={ }
    res.status(200).render('contact.pug',params);
})  
//start the server
app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
});

