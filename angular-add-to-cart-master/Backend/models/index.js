const mongoose= require('mongoose');
const user= require('./user.model')
const product=require('./product.model')

mongoose.connect("mongodb://127.0.0.1:27017/FASHIONWORLD",{useNewUrlParser:true},(err)=>{
    if(!err)
        console.log(" MongoDB connected..!!!")
    else
        console.log("Error While connecting with the database")
})

