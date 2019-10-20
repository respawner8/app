const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

const usermodel=require('../models/farmermodel');

router.get('/',function(req,res){
    
    usermodel.find()
    
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
})





router.post('/',function(req,res){
    console.log('abcd');
    console.log(req.body);
   // res.json(req.body).status(200);
   const newuser=new usermodel({
        //_id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        cropname : req.body.cropname,
        quantity : req.body.quantity,
        exprice: req.body.exprice
        

   });
   newuser.save();
   res.send("Account created").status(201);

});
   

           module.exports=router;