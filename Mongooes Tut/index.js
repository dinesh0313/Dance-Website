const express =require("express");
const mongoose = require('mongoose');
const app=express();
const PORT = 8000;
// main().catch(err => console.log(err));


//connection
mongoose
    .connect('mongodb://127.0.0.1:27017/test')
    .then(()=> console.log("we are connect"))
    .catch((err)=>console.log("mongo error",err));
// async function main() {
// await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // console.log(' we are connect');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
const kittySchema = new mongoose.Schema({
    name: String,
  });

  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence1' });
  console.log(silence.name); 


  // kittySchema.methods.speak = function speak() {
    // const greeting = this.name
    //   ? 'Meow name is ' + this.name
    //   : 'I don\'t have a name';
    // console.log(greeting);
  // };
  // const Kitten1 = mongoose.model('Kitten', kittySchema);
//   const Kitten = mongoose.model('Kitten', kittySchema);
// const fluffy = new Kitten({ name: 'fluffy' });
// await fluffy.save();

// const kittens = await Kitten.find();
// console.log(kittens);

// await Kitten.find({ name: fluffy });